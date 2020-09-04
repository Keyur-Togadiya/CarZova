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

<tr bgcolor="pink">
<td><xsl:value-of select="Student/Person-Details/name"/></td>
<td><xsl:value-of select="Student/Person-Details/address"/></td>
<td><xsl:value-of select="Student/Person-Details/presentweight"/></td>
<td><xsl:value-of select="Student/Person-Details/goalweight"/></td>
</tr>

</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>