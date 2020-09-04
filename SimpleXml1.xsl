<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h2>Student Database</h2>
<table border="1">
<tr>
<th>name</th>
<th>Address</th>
<th>Presentweight</th>
<th>GoalWeight</th>
</tr>
<xsl:for-each select="Student/Person-Details">
<tr>
<td><xsl:value-of select="name"/></td>
<td><xsl:value-of select="address"/></td>
<td><xsl:value-of select="presentweight"/></td>
<td><xsl:value-of select="goalweight"/></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>