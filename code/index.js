setup=()=>{
pixelDensity(1);mF=Math.floor;mC=Math.cos;mS=Math.sin;mP=Math.pow;mR=Math.round;mI=parseInt;mQ=Math.sqrt;
n=noise;o=map;f2=loadPixels;createCanvas(w=864,h=1080);oH=windowHeight;oW=mF(oH*0.8);wH=windowHeight;wW=windowWidth;if(oW>wW){oH=mF(windowWidth*1.25);oW=mF(oH*.8)}
S=Uint32Array.from([9,7,n1=5,t=3]);
R=(a1=1)=>a1*(t=S[3],S[3]=S[2],S[2]=S[1],S[1]=n1=S[0],t^=t<<11,S[0]^=(t^t>>>8)^(n1>>>19),S[0]/2**32);
seed=fxhash;
[...seed+'saltNaCl'].map(c=>R(S[3]^=c.charCodeAt()*23205));'tx piter'
rN=(f,l)=>o(R(),0,1,f,l)
nxS=oH/h;nS=mF(rN(1000,9000));noiseSeed(nS);iG=createGraphics(w,h);cV=iG.curveVertex;g7=curvePoint;z1=iG.stroke;z2=iG.strokeWeight;z9=iG.noFill;iB=iG.bezier;g6=iG.circle;
cP=mF(rN(0,5));cP2=mF(rN(0,6.7));cP3=mF(rN(0,4));if(rN(0,1)>.4){cP3=3};if(rN(0,1)>.99){cP3=4}
fL=.7;q7=55;q2=0;q3=0;vS=0;hS=0;mXD=0;sQ=0;q5=0;
if(rN(0,1)>.3){gFI=1}else{gFI=0};if(rN(0,1)>.8){mXD=1};if(rN(0,1)>0.5){pC=1}else{pC=0};cM=rN(0,1);if(cM>.5&&gFI>0){hS=1};if(gFI>0&&hS==0){vS=1};if(rN(0,1)>.97){q7=1};if(rN(0,1)>.8){q2=1}else{fL=.65};
if(rN(0,1)>.9&&q2<1&&q7>1){sQ=50;fL=.5};if(q2==1){if(rN(0,1)>0.5){q3=1}else{q3=0}};if(gFI>0&&rN(0,1)>.9){q5=1};
if(cP2==0){p1="shamrock"};if(cP2==1){p1="blush"};if(cP2==2){p1="lapis"};if(cP2==3){p1="gold"};if(cP2==4){p1="celeste"};if(cP2==5){p1="lime"};if(cP2==6){p1="charcoal"}
if(cP==0){p2="citrus"};if(cP==1){p2="bellarose"};if(cP==2){p2="sherbet"};if(cP==3){p2="jewel"};if(cP==4){p2="sprouse"};if(mXD>0){p2="mixed"}
if(q2==1&&q3==1){p3="column"};if(q2==1&&q3==0){p3="level"};if(q2<1&&sQ<1){p3="wild"};if(q2<1&&sQ>1){p3="cluster"};if(gFI>0){p4="yes"};if(gFI<1){p4="no"};
if(cP3==0){p5="chartreuse"};if(cP3==1){p5="red"};if(cP3==2){p5="blue"};if(cP3==3){p5="black"};if(cP3==4){p5="pink"};if(gFI==0){p5="none"}
if(q7>2){p6="no"}else{p6="yes"};p7="none";if(gFI==1&&hS==1){p7="horizontal"};if(gFI==1&&vS==1){p7="vertical"};if(gFI==1&&q5==1){p7="grid"}
window.$fxhashFeatures = {"background":p1,"flower palette":p2,"alignment":p3,"mask":p4,"mask style":p7,"mask color":p5,"single flower":p6}
sYM=[144,432,720,180,540,900];tS=[];hX=0;
for(t4=0;t4<8;t4++){x1=rN(0,150);if(t4>0){x1=hX+rN(15,125)};x2=x1+rN(50,125);if(q5==1&&rN(0,1)>.5){x2-=35};if(q5==0&&rN(0,1)>.8){if(pC>0&&gFI>0){x1+=150;x2=h};if(gFI>0&&pC<1){x1=0;x2-=150}};hX=x2;tS.push([x1,x2]);}
pR=0;q6=[];
while(q6.length<q7)
{d2=rN(250,650);if(q7==1){d2=750};
  if(sQ>0){d2=rN(245,350)};if(pR>19950){d2=rN(200,300)};r2=d2/2;
q8={dia:d2,r:d2/2,x:mF(rN(d2/2+sQ,w-d2/2-sQ)),y:mF(rN(d2/2+sQ,h-d2/2-sQ))};
  if(q2==1&&q3==1){sY1=mF(rN(0,3));q8.x=sYM[sY1]}
  if(q2==1&&q3==0){sY1=mF(rN(3,6));q8.y=sYM[sY1]}oL=false;
for(j=0;j<q6.length;j++){q9=q6[j];d=dist(q8.x,q8.y,q9.x,q9.y);if(d<q8.r*fL+q9.r*fL){oL=true}}
if(!oL){q6.push(q8)}pR++;if(pR>20000){break;}}
z12=[[52,58,64],[33,37,41],[73,80,87],[108,117,125],[173,181,189]]
z11=[[180,240,160],[149,236,170],[165,238,165],[103,200,25],[212,245,148]]
z3=[[103,199,255],[128,208,255],[154,218,255],[179,227,255],[205,236,255],[185,117,171],[245,91,56],[251,75,191],[213,120,202],[240,210,97]]
z4=[[50,153,76],[52,201,76],[37,150,37],[81,133,56],[47,102,72],[242,65,0],[245,112,29],[245,171,61],[255,171,92],[200,143,86],[19,51,3]]
z5=[[250,228,225],[245,216,201],[200,145,125],[245,165,180],[247,231,248],[233,134,134],[255,143,160],[252,201,197],[206,144,145],[242,162,145],[2,24,38]]
z6=[[61,72,222],[55,94,217],[43,61,153],[88,41,175],[88,125,204],[255,164,110],[240,89,103],[240,115,25],[255,150,168],[230,146,65]]
z7=[[221,160,22],[208,144,0],[240,158,5],[35,75,156],[232,194,73],[79,0,11],[163,0,54],[234,23,68],[255,112,124],[255,10,10],[20,47,103]]
z8=[];z10=[];zF1=[];
for(i=0;i<11;i++){if(cP==0){z8.push(z4[i])}else if(cP==1){z8.push(z5[i])}else if(cP==2){z8.push(z6[i])}else if(cP==3){z8.push(z7[i])}else if(cP==4){z8.push(z3[i])}}
if(mXD>0){for(i2=5;i2<10;i2++){newF=mF(rN(0,5));if(newF==0){z8[i2]=z4[i2]}else if(newF==1){z8[i2]=z5[i2]}else if(newF==2){z8[i2]=z6[i2]}else if(newF==3){z8[i2]=z7[i2]}else if(newF==4){z3[i2]=z3[i2]}}}
for(i2=0;i2<5;i2++){if(cP2==0){z8[i2]=z4[i2]}else if(cP2==1){z8[i2]=z5[i2]}else if(cP2==2){z8[i2]=z6[i2]}else if(cP2==3){z8[i2]=z7[i2]}else if(cP2==4){z8[i2]=z3[i2]}else if(cP2==5){z8[i2]=z11[i2]}else if(cP2==6){z8[i2]=z12[i2]}}iG.background(z8[0]);
for(iT=0;iT<1200;iT++){r11=mF(rN(-25,w));r22=mF(rN(-25,h));r33=mF(rN(100,200));r44=mF(rN(150,300));if(rN(0,1)>0.9){r33+=300};iG.noStroke();rNC=mF(rN(1,5));iG.fill(z8[rNC][0],z8[rNC][1],z8[rNC][2],5);if(iT<500){g6(r11,r22,r44)}else{iG.rect(r11,r22,r33,r44)}}
for(i=0;i<q6.length;i++){xOff1=rN(.003,.004);xOff2=rN(.008,.007);wOff=0.002;radius=q6[i].dia;tX=q6[i].x;tY=q6[i].y;mkr(tX,tY,radius)}
function mkr(startX,startY,radius){
l1=[];l12=[];l13=[];r1=o(n(radius),0,1, 5.2,6.2);r2=r1-.19;r3=radius*.1;if(radius>500){r3*=1.1};r4=radius*rN(0.09,0.18);
for(i1=0;i1<r3;i1++){if(i1<4){angle=i1;angle2=i1;angle3=i1}else{angle=rN(r1,r2)*i1;angle2=rN(r1,r2)*i1;angle3=i1*rN(.1,5)};
if(i1<10){r5=radius*.05;angle3=i1}else{r5=r4};if(i1>r3-10){angle=i1;angle2=i1};x=tX+(1+angle)*cos(angle);y=tY+(1+angle)*sin(angle);
x2=tX+(1+angle2)*cos(angle2);y2=tY+(1+angle2)*sin(angle2);x3=tX+r5*cos(angle3);y3=tY+r5*sin(angle3);l1.push([x,y]);l12.push([x2,y2]);l13.push([x3,y3]);}dR()}
function dR(){sW5=mF(rN(2,10));sw1=radius*.2;z2(sW5);z9;rC2=mF(rN(5,9));rL1=z8[rC2];zF1.push(rL1);rL1S=rL1.slice();rL1S[0]+=25;rL1S[1]+=25;rL1S[2]+=25;
for(k2=0;k2<l1.length-4;k2++){x1=l1[k2][0];y1=l1[k2][1];x2=l1[k2+1][0];y2=l1[k2+1][1];x3=l1[k2+2][0];y3=l1[k2+2][1];x4=l1[k2+3][0];y4=l1[k2+3][1];
a=x3-x2;b=y3-y2;c=mQ(a*a+b*b)/rN(0.01,4);steps=mF(c);if(steps>1000){steps=1000};if(radius>500){steps*=1.2};for(k3=0;k3<=steps;k3++){
z1(rL1);t1=k3/steps;div=k3-1;sS5=(1)*o(n(wOff),0,1,0,sw1);xF=g7(x1,x2,x3,x4,t1);yF=g7(y1,y2,y3,y4,t1);if(k3>steps-1){iG.fill(rL1)}
g6(xF,yF,sS5);wOff+=rN(xOff1,xOff2)};stepsN=steps*2;if(radius>500){steps*=1.2};for(kSS=0;kSS<=stepsN;kSS++){if(kSS>15&&kSS<100){z1(rL1S);t1=kSS/stepsN;sS5=(1)*o(n(wOff),0,1,0,sw1);xF=g7(x1,x2,x3,x4,t1);yF=g7(y1,y2,y3,y4,t1);sS5*=.3;if(kSS>97){iG.fill(rL1S)};g6(xF,yF+5,sS5);wOff+=rN(xOff1, xOff2);}}}
sw1=radius*.12;sW5=mF(rN(2,10));z2(sW5);rC3=mF(rN(5,9));rL2=z8[rC3];zF1.push(rL2);rL2S=rL2.slice();rL2S[0]+=20;rL2S[1]+=20;rL2S[2]+=20;
for(k4=0;k4<l1.length-4;k4++){x1=l12[k4][0];y1=l12[k4][1];x2=l12[k4+1][0];y2=l12[k4+1][1];x3=l12[k4+2][0];y3=l12[k4+2][1];x4=l12[k4+3][0];y4=l12[k4+3][1];
a=x3-x2;b=y3-y2;c=mQ(a*a+b*b);steps=mF(c);if(steps>500){steps=500};for(k5=0;k5<=steps;k5++){z9;z1(rL2);t1=k5/steps;div=k5-1;
sS5=(1)*o(n(wOff),0,1,0,sw1);xF=g7(x1,x2,x3,x4,t1);yF=g7(y1,y2,y3,y4,t1);if(k5>steps-1){iG.fill(rL2)};g6(xF,yF,sS5);wOff+=rN(xOff1,xOff2);}stepsN=steps*3;for(kSS=0;kSS<=stepsN;kSS++){if(kSS>5&&kSS<50){z1(rL2S);t1=kSS/stepsN;
sS5=(1)*o(n(wOff),0,1,0,sw1);xF=g7(x1,x2,x3,x4,t1);yF=g7(y1,y2,y3,y4,t1);sS5*=.1;if(kSS>48){iG.fill(rL1S)};g6(xF,yF+5,sS5);wOff+=rN(xOff1,xOff2);}}}
sw1=sw1*0.5;if(sw1<25){sw1=25};sW5=mF(rN(2,5));z2(sW5);rC4=mF(rN(5,9));rL3=rL2.slice();rL3[0]-=25;rL3[1]-=25;rL3[2]-=25;
for(k6=0;k6<l1.length-14;k6++){x1=l13[k6][0];y1=l13[k6][1];x2=l13[k6+1][0];y2=l13[k6+1][1];x3=l13[k6+2][0];y3=l13[k6+2][1];x4=l13[k6+3][0];y4=l13[k6+3][1];a=x3-x2;b=y3-y2;
c=mQ(a*a+b*b)/rN(0.01,2);steps=mF(c);if(steps>200){steps=200};for(k7=0;k7<=steps;k7++){z1(rL3);t1=k7/steps+rN(0,.02);div=k7-1;sS5=(1)*o(n(wOff),0,1,0,sw1);xF=g7(x1,x2,x3,x4,t1);
yF=g7(y1,y2,y3,y4,t1);if(k5>steps-1){iG.fill(rL3)};g6(xF,yF,sS5);wOff+=rN(xOff1,xOff2);}}}
wF=0.01;wdF=0.01;image(iG,0,0,w,h);f2();bA=[];dA=[];mA=[];wA=[];bTH=3;dTH=40;fTH=60;mTH=3;wT=68;
if(cP3==0){gC=[206,250,5]};if(cP3==1){gC=[240,0,0]};if(cP3==2){gC=[0,0,220]};if(cP3==3){gC=[0,0,0]};if(cP3==4){gC=[255,16,240]};aX=mF(rN(-10,10));
for(J=0;J<h;J++){for(E=0;E<w;E++){iX=(E+(J)*(w))*4;A=pixels[iX];B=pixels[iX+1];C=pixels[iX+2];f3=((E-1)+(J)*(w))*4;f4=pixels[f3];f5=pixels[f3+1];f6=pixels[f3+2];if(E-1<0){f4=A;f5=B;f6=C};Q=(abs((A+B+C)/3-(f4+f5+f6)/3));f7=(0.2126*A+0.7152*B+0.0722*C);pts=mF(rN(7,17));rR=mF(rN(0,pts));r2=rN(.5,2);r7=rN(0,1);r8=rN(-15,15);r9=rN(-15,15);v4=rN(0,100);if(v4<bTH){rE=A;gE=B;bE=C;yN=J;xN=E;cS1=(1)*o(n(wF),0,2.5,9,21);lA=rN(50,100);bA.push([xN,yN,rE,gE,bE,cS1,lA,pts,rR,r2,r7]);wF+=rN(.1,.2)}
pts=mF(rN(7,11));v5=rN(0,100);if(v5<mTH){rE=A;gE=B;bE=C;cS1=(1)*o(n(wF),0,2.5,2.5,8);lA=rN(5,80);if(f7>150){Y=J-5;mA.push([E,Y,rE,gE,bE,cS1,lA,pts,rR,r2,r7])}wF+=rN(.1,.2)}
v2=rN(0,100);if(v2<dTH){rE=A;gE=B;bE=C;cS1=(1)*o(n(wdF),0,2.5,.5,1.5);lA=rN(40,100);if(Q>0.2&&f7<245){Y=J-10;dA.push([E,Y,rE,gE,bE,cS1,lA,pts,rR,r2,r7])}wdF+=rN(.1,.2)};f1=0;for(i6=0;i6<zF1.length;i6++){cC5=zF1[i6];if((A>cC5[0]-10&&A<cC5[0]+10)&&(B>cC5[1]-10&&B<cC5[1]+10)&&(C>cC5[2]-10&&C<cC5[2]+10)){f1+=1}}
v1=rN(0,100);if(v1<fTH){rE=A;gE=B;bE=C;lA=rN(50,70);cS1d=(1)*o(n(wdF),0,2.5,.3,1.8);if(rN(0,1)>.9){lA=95};if(f1>0){if(vS>0){Y=E;Y2=J};if(hS>0){Y=J;Y2=E};checkThis=0;if(gFI>0){for(i3=0;i3<tS.length;i3++){if(Y>tS[i3][0]&&Y<tS[i3][1]){checkThis+=1}};if(q5>0){for(i3=0;i3<tS.length;i3++){if(Y2>tS[i3][0]&&Y2<tS[i3][1]){checkThis+=1}}}
if(checkThis>0){rE=gC[0];gE=gC[1];bE=gC[2];lA=100;cS1d+=.26}};dA.push([E+aX,J-20,rE,gE,bE,cS1d,lA,pts,rR,r2,r7])};wdF+=rN(.1,.2)};
v3=rN(0,100);if(v3<wT&&(E<2||E>w-2||J<2||J>h-2)){cS1=(1)*o(n(wF),0,2.5,1.5,4.5);lA=rN(25,50);wA.push([E,J,255,255,255,cS1,lA,pts,rR,r2,r7]);wF+=rN(.1,.2)}}}
clear();resizeCanvas(oW,oH);background(z8[0]);
millisecond = millis();console.log("setup time: " + millisecond*.001)} // DELETE AT END
draw=()=>{l=fill;sT=stroke;dB();noLoop()}
dB=()=>{for(i=0;i<bA.length;i++){E=bA[i][0];J=bA[i][1];A=bA[i][2];B=bA[i][3];C=bA[i][4];cS1=bA[i][5];lA=bA[i][6];pts=bA[i][7];rR=bA[i][8];r2=bA[i][9];r7=bA[i][10];r8=bA[i][11];r9=bA[i][12];sT(color(A-5,C-5,B-5,3));l(color(A,B,C,lA));mB(E,J,0.5,pts,cS1,rR,r2,r7);}dM()}
dM=()=>{for(i=0;i<mA.length;i++){E=mA[i][0];J=mA[i][1];A=mA[i][2];B=mA[i][3];C=mA[i][4];cS1=mA[i][5];lA=mA[i][6];pts=mA[i][7];rR=mA[i][8];r2=mA[i][9];r7=mA[i][10];r8=mA[i][11];r9=mA[i][12];sT(color(A-1,C-1,B-1,3));l(color(A,B,C,lA));mB(E,J,0.5,pts,cS1,rR,r2,r7)}dD()}
dD=()=>{for(i=0;i<dA.length;i++){E=dA[i][0];J=dA[i][1];A=dA[i][2];B=dA[i][3];C=dA[i][4];cS1=dA[i][5];lA=dA[i][6];pts=dA[i][7];rR=dA[i][8];r2=dA[i][9];r7=dA[i][10];sT(color(A-1,C-1,B-1,3));l(color(A,B,C,lA+100));mB(E,J,0.5,pts,cS1,rR,r2,r7)};dW()}
mB=(bX,bY,r,pts,cS1,rR,r2,r7,r8,r9)=>{beginShape();r+=(cS1/0.9);r3=r*r2;if(r<1){r3=r};for(p=0+rR;p<pts+1+rR;p++){aG=((p*TWO_PI)/pts);x1=r*mC(aG);y1=r3*mS(aG);x2=x1*mC(r7)-y1*mS(r7);y2=y1*mC(r7)+x1*mS(r7);x3=(bX+x2)*nxS;y3=(bY+y2)*nxS;vertex(x3,y3)}endShape()}
dW=()=>{noStroke();for(i=0;i<wA.length;i++){E=wA[i][0];J=wA[i][1];A=wA[i][2];B=wA[i][3];C=wA[i][4];cS1=wA[i][5];pts=wA[i][7]+1;rR=wA[i][8];r2=wA[i][9];r7=wA[i][10];l(255);mB(E,J,1,pts,cS1,rR,r2,r7)}
millisecond = millis();console.log("total time: " + millisecond*.001);// DELETE AT END
console.log("(c) Sarah Ridgley 2022")}
