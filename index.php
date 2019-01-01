<!DOCTYPE html>
<html>
<head>
	<title>WCLN - Two Sort</title>
	<meta charset="utf-8"/>
	<link rel="stylesheet" href="https://bclearningnetwork.com/lib/bootstrap/bootstrap.min.css">
	<script src="https://bclearningnetwork.com/lib/jquery/jquery-3.2.1.min.js"></script>
	<script src="https://bclearningnetwork.com/lib/bootstrap/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="style/style.css"/>
	<link rel="shortcut icon" href="images/favicon.ico"/>
	<script>
		var title = "<?=$_GET['title']?>";
	</script>
	<script type="text/javascript" src="two_sort.js"></script>
</head>
<body onload="init();">
	<div class="container">
    <div class="row">
      <div class="col-xs-12" id="header-bar">
        <img src="images/logo.png">
        <h1>Two Sort</h1>
        <p>Classify the following items by either dragging and dropping them into the <i>left</i> column or the <i>right</i> column.</p>
      </div>
    </div>
    <div class="row">
      <div id="left" class="col-xs-4 game-column" ondrop="drop(event)" ondragover="allowDrop(event)">
        <h2>Left</h2>
      </div>
      <div id="items" class="col-xs-4 game-column" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div id="result">
          <h2><b>Score 5/5</b></h2>
          <p>Click <i>Restart</i> to attempt again!</p>
          <button id="restart-button" onclick="reset()">Restart</button>
        </div>
      </div>
      <div id="right" class="col-xs-4 game-column" ondrop="drop(event)" ondragover="allowDrop(event)">
        <h2>Right</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12" id="footer-bar">
        <button title="Sort all items before clicking 'Check'." disabled onclick="check()" id="check-button">Check</button>
        <button title="Reset all items back to the middle." onclick="reset()" id="reset-button">Reset</button>
      </div>
    </div>
	</div>
</body>
</html>
