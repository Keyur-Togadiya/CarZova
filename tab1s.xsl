<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
  <h2>GG</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>Fname</th>
      <th>Lname</th>
    </tr>
    <xsl:for-each select="catalog/cd">
    <tr>
      <td><xsl:value-of select="fname"/></td>
      <xsl:choose>
      <xsl:when test="sr > 1">
         <td bgcolor="#ff00ff">
         <xsl:value-of select="fname"/>
         </td>
      </xsl:when>
      <xsl:when test="sr > 3">
         <td bgcolor="#cccccc">
         <xsl:value-of select="lname"/></td>
      </xsl:when>
      <xsl:otherwise>
         <td><xsl:value-of select="fname"/></td>
      </xsl:otherwise>
      </xsl:choose>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
