<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" cdata-section-elements="style script" mime-type="text/html"/>
	<xsl:template match="/">
		<html>
			<head>
				<meta charset="utf-8" />
				<title>Profit Calculator</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
				<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans"/>
				<link rel="stylesheet" href="style.css" />
				<script src="js/zepto.min.js"></script>
				<script>
					window.calc = {}
					window.Z = Zepto
					// For anything requiring a loaded dependency
					window.onReady = function(cb){
					var c=0,b=function(){if(!c){if(document.readyState=='complete'){cb();c=true}}}
					if(document.readyState=='complete')b()
					else if(Element.prototype.addEventListener)document.addEventListener('readystatechange',b)
					else if(Element.prototype.attachEvent)document.attachEvent('onreadystatechange',b)
					};
				</script>
				<script src="calc.js" async="async"></script>
			</head>
			<body>
			<h1>Profit Calculator</h1>
			<ul>
				<xsl:for-each match="items/item">
					<xsl:sort select="[@name]" order="ascending"/>
					<li><xsl:value-of select="[@name]"/><ul>
						<li>Decent <input type="number" min="0" step="1" value="5"/></li>
						<li>Good <input type="number" min="0" step="1" value="0"/></li>
						<li>Perfect <input type="number" min="0" step="1" value="0"/></li>
						<li>Shining <input type="number" min="0" step="1" value="0"/></li>
					</ul></li>
				</xsl:for-each>
			</ul>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
