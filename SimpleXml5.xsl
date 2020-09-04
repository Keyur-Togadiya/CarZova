<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h2>Student Database</h2>

<table border="1">
<tr bgcolor="red">
<th>Name</th>
<th>Address</th>
<th>presentweight</th>
<th>goalweight</th>
</tr>


<xsl:for-each select="Student/Person-Details">
<xsl:if test="goalweight &gt; 80">


<tr bgcolor="orange">
<td><xsl:value-of select="name"/></td>
<td><xsl:value-of select="address"/></td>
<td><xsl:value-of select="presentweight"/></td>
<td><xsl:value-of select="goalweight"/></td>
</tr>
</xsl:if>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>