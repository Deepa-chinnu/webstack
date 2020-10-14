<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Travel Management Website</h2>
  <table border="1" cellspacing="0">
    <tr bgcolor="#A3D8E8">
      <th style="text-align:left">From</th>
      <th style="text-align:left">To</th>
	  <th style="text-align:left">Date</th>
	  <th style="text-align:left">Time</th>
    <th style="text-align:left">Place</th>
    <th style="text-align:left">Flightname</th>
    </tr>
    <xsl:for-each select="Search/search">
    <tr>
      <td><xsl:value-of select="From"/></td>
      <td><xsl:value-of select="To"/></td>
      <td><xsl:value-of select="Date"/></td>
      <td><xsl:value-of select="Time"/></td>
      <td><xsl:value-of select="Place"/></td>
      <td><xsl:value-of select="Flightname"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

