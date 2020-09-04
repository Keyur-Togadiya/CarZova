<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body bgcolor="black">
<h2 style="color:yellow;"><u>Technical Details:</u></h2>

<table id="demo" style="border-collapse: collapse;width:40%;border-color: #ffffff;">
<tr bgcolor="">


</tr>


<xsl:for-each select="Technical/Technical-Details">
<xsl:choose>
<xsl:when test="goalweight>=70">


<tr>
<td style="font-size: 20px;border:1px solid #ffffff ;color:white;padding:8px;"><xsl:value-of select="name"/></td>
<td style="font-size: 20px;color:black; border:1px solid #000000;background-color:white"><xsl:value-of select="address"/></td>
</tr>
</xsl:when>

</xsl:choose>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>