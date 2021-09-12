import { SVG } from "@svgdotjs/svg.js";
import { Vec2 } from "wtc-math";

class Drawing {
  static defaults = {
    stroke: "#333",
    pxratio: 1,
  };
  static DT_CANVAS = 1;
  static DT_SVG = 2;
  #drawing;
  #ctx;
  #mode;
  #instructions = [];

  constructor(mode = Drawing.DT_CANVAS, settings) {
    settings = Object.assign({}, Drawing.defaults, settings);

    this.mode = mode;
    if (this.mode & Drawing.DT_CANVAS) {
      this.#drawing = document.createElement("canvas");
    } else if (this.mode & Drawing.DT_SVG) {
      this.#drawing = SVG();
    }

    this.stroke = settings.stroke;
    this.pxratio = settings.pxratio;
  }
  clear() {
    if (this.mode & Drawing.DT_CANVAS) {
      this.c.clearRect(0, 0, ...this.dimensions.scaleNew(this.pxratio).array);
    } else if (this.mode & Drawing.DT_SVG) {
      this.drawing.clear();
    }
  }
  rect(position, dimensions) {
    if (this.saving) {
      this.#instructions.push({
        f: "rect",
        args: [position, dimensions],
      });
    }
    position = position.scaleNew(this.pxratio);
    dimensions = dimensions.scaleNew(this.pxratio);
    if (this.mode & Drawing.DT_CANVAS) {
      this.c.beginPath();
      this.c.rect(...position.array, ...dimensions.array);
      this.c.stroke();
    } else if (this.mode & Drawing.DT_SVG) {
      this.drawing
        .rect(dimensions.width, dimensions.height)
        .move(...position.array)
        .fill(this.svgFill)
        .stroke("#f06");
    }
  }
  circle(position, radius) {
    if (this.saving) {
      this.#instructions.push({
        f: "circle",
        args: [position, radius],
      });
    }
    position = position.scaleNew(this.pxratio);
    radius *= this.pxratio;
    if (this.mode & Drawing.DT_CANVAS) {
      if (this.fill) this.c.fillStyle = this.fill;
      this.c.beginPath();
      this.c.arc(position.x, position.y, radius, 0, 2 * Math.PI);
      if (this.stroke) this.c.stroke();
      if (this.fill) this.c.fill();
    } else if (this.mode & Drawing.DT_SVG) {
      this.drawing
        .circle(radius * 2)
        .fill(this.svgFill)
        .stroke(this.svgStroke)
        .move(...position.subtractScalarNew(radius).array);
    }
  }
  line(a, b) {
    if (this.saving) {
      this.#instructions.push({
        f: "line",
        args: [a, b],
      });
    }
    a = a.scaleNew(this.pxratio);
    b = b.scaleNew(this.pxratio);
    if (this.mode & Drawing.DT_CANVAS) {
      this.c.beginPath();
      this.c.moveTo(a.x, a.y);
      this.c.lineTo(b.x, b.y);
      if (this.stroke) this.c.stroke();
    } else if (this.mode & Drawing.DT_SVG) {
      this.drawing.line(...a.array, ...b.array).stroke(this.svgStroke);
    }
  }
  polyline(points) {
    if (this.saving) {
      this.#instructions.push({
        f: "polyline",
        args: points,
      });
    }
    if (this.mode & Drawing.DT_CANVAS) {
      this.c.beginPath();
      points.forEach((p, i) => {
        p = p.scaleNew(this.pxratio);
        if (i === 0) this.c.moveTo(p.x, p.y);
        else this.c.lineTo(p.x, p.y);
      });
      if (this.stroke) this.c.stroke();
    } else if (this.mode & Drawing.DT_SVG) {
      this.drawing
        .polyline(points.map((p) => p.array))
        .fill(this.svgFill)
        .stroke(this.svgStroke);
    }
  }
  path(path) {
    if (this.mode & Drawing.DT_CANVAS) {
      this.c.beginPath();
      const p1 = new Path2D(path);
      const m = document
        .createElementNS("http://www.w3.org/2000/svg", "svg")
        .createSVGMatrix();
      const p = new Path2D();
      const t = m.scale(this.pxratio);
      p.addPath(p1, t);
      if (this.stroke) this.c.stroke(p);
    } else if (this.mode & Drawing.DT_SVG) {
      this.drawing.path(path).fill(this.svgFill).stroke(this.svgStroke);
    }
  }
  polygon(points) {
    if (this.saving) {
      this.#instructions.push({
        f: "polygon",
        args: [points],
      });
    }
    if (this.mode & Drawing.DT_CANVAS) {
      this.c.beginPath();
      points.forEach((p, i) => {
        p = p.scaleNew(this.pxratio);
        if (i === 0) this.c.moveTo(p.x, p.y);
        else this.c.lineTo(p.x, p.y);
      });
      if (this.stroke) this.c.stroke();
      if (this.fill) this.c.fill();
    } else if (this.mode & Drawing.DT_SVG) {
      this.drawing
        .polygon(points.map((p) => p.array))
        .fill(this.svgFill)
        .stroke(this.svgStroke);
    }
  }

  download() {
    let d;
    if (this.mode & Drawing.DT_CANVAS) {
      d = new Drawing(Drawing.DT_SVG, {}).size(this.dimensions);
      this.#instructions.forEach((i) => {
        d[i.f](...i.args);
      });
    } else if (this.mode & Drawing.DT_SVG) {
      d = this;
    }

    const fileName = "untitled.svg";
    const url =
      "data:image/svg+xml;utf8," + encodeURIComponent(d.drawing.svg());
    const link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.click();
  }

  addTo(element) {
    if (typeof element === "string") {
      if (this.mode & Drawing.DT_CANVAS) {
        document.body.querySelector(element).appendChild(this.drawing);
      } else if (this.mode & Drawing.DT_SVG) {
        this.drawing.addTo("#container");
      }
    }
    return this;
  }

  size(d) {
    if (this.mode & Drawing.DT_CANVAS) {
      this.drawing.width = d.width * this.#pxratio;
      this.drawing.height = d.height * this.#pxratio;
    } else if (this.mode & Drawing.DT_SVG) {
      this.drawing.size(...d.scaleNew(this.#pxratio).array);
      this.#drawing.viewbox(
        `0 0 ${d.x * this.#pxratio} ${d.y * this.#pxratio}`
      );
    }
    this.#dimensions = d;
    return this;
  }

  #dimensions;
  set dimensions(v) {
    if (v instanceof Vec2) {
      this.#dimensions = v;
      this.size(v);
    }
  }
  get dimensions() {
    return this.#dimensions;
  }

  #pxratio = 1;
  set pxratio(v) {
    if (v > 0) {
      this.#pxratio = v;
    }
  }
  get pxratio() {
    return this.#pxratio || 1;
  }

  get drawing() {
    return this.#drawing;
  }
  get c() {
    if (this.mode & Drawing.DT_CANVAS) {
      if (this.#ctx) return this.#ctx;
      this.#ctx = this.drawing.getContext("2d");
      return this.#ctx;
    }
  }
  #stroke;
  set stroke(v) {
    this.#stroke = v;
    if (this.mode & Drawing.DT_CANVAS) {
      this.c.strokeStyle = v;
    }
  }
  get stroke() {
    return this.#stroke;
  }
  get svgStroke() {
    if (this.#stroke) return this.#stroke;
    return {};
  }
  #fill = null;
  set fill(v) {
    this.#fill = v;
    if (this.mode & Drawing.DT_CANVAS) {
      this.c.fillStyle = v;
    }
  }
  get fill() {
    return this.#fill;
  }
  get svgFill() {
    if (this.#fill) return this.#fill;
    return "none";
  }
  set mode(v) {
    if (v & (Drawing.DT_CANVAS | Drawing.DT_SVG)) {
      this.#mode = v;
    }
  }
  get mode() {
    return this.#mode || Drawing.DT_CANVAS;
  }
  #saving = false;
  set saving(v) {
    this.#saving = v === true;
  }
  get saving() {
    return this.#saving;
  }
}

export default Drawing;