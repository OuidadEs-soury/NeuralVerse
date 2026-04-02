body {

margin:0;
overflow:hidden;
background:black;
font-family:Arial;

}

.hero {

position:absolute;
top:40%;
left:50%;
transform:translate(-50%,-50%);
text-align:center;
color:white;
z-index:10;

}

h1 {

font-size:80px;

background: linear-gradient(90deg,#00f7ff,#ff00f7);

-webkit-background-clip:text;
color:transparent;

animation: glow 3s infinite alternate;

}

button {

padding:15px 40px;
border:none;
background:#00f7ff;
color:black;
font-size:20px;
cursor:pointer;
border-radius:40px;

}

button:hover {

transform:scale(1.1);

}

@keyframes glow {

from { filter: drop-shadow(0 0 10px cyan) }

to { filter: drop-shadow(0 0 30px magenta) }

}