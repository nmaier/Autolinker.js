Ext.data.JsonP.Autolinker_matcher_Matcher({"tagname":"class","name":"Autolinker.matcher.Matcher","autodetected":{},"files":[{"filename":"Matcher.js","href":"Matcher.html#Autolinker-matcher-Matcher"}],"abstract":true,"members":[{"name":"tagBuilder","tagname":"cfg","owner":"Autolinker.matcher.Matcher","id":"cfg-tagBuilder","meta":{"required":true}},{"name":"constructor","tagname":"method","owner":"Autolinker.matcher.Matcher","id":"method-constructor","meta":{}},{"name":"parseMatches","tagname":"method","owner":"Autolinker.matcher.Matcher","id":"method-parseMatches","meta":{"abstract":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.matcher.Matcher","short_doc":"An abstract class and interface for individual matchers to find matches in\nan input string with linkified versions of...","component":false,"superclasses":[],"subclasses":["Autolinker.matcher.Email","Autolinker.matcher.Hashtag","Autolinker.matcher.Phone","Autolinker.matcher.Twitter","Autolinker.matcher.Url"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Autolinker.matcher.Email' rel='Autolinker.matcher.Email' class='docClass'>Autolinker.matcher.Email</a></div><div class='dependency'><a href='#!/api/Autolinker.matcher.Hashtag' rel='Autolinker.matcher.Hashtag' class='docClass'>Autolinker.matcher.Hashtag</a></div><div class='dependency'><a href='#!/api/Autolinker.matcher.Phone' rel='Autolinker.matcher.Phone' class='docClass'>Autolinker.matcher.Phone</a></div><div class='dependency'><a href='#!/api/Autolinker.matcher.Twitter' rel='Autolinker.matcher.Twitter' class='docClass'>Autolinker.matcher.Twitter</a></div><div class='dependency'><a href='#!/api/Autolinker.matcher.Url' rel='Autolinker.matcher.Url' class='docClass'>Autolinker.matcher.Url</a></div><h4>Files</h4><div class='dependency'><a href='source/Matcher.html#Autolinker-matcher-Matcher' target='_blank'>Matcher.js</a></div></pre><div class='doc-contents'><p>An abstract class and interface for individual matchers to find matches in\nan input string with linkified versions of them.</p>\n\n<p>Note that Matchers do not take HTML into account - they must be fed the text\nnodes of any HTML string, which is handled by <a href=\"#!/api/Autolinker-method-parse\" rel=\"Autolinker-method-parse\" class=\"docClass\">Autolinker.parse</a>.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required config options</h3><div id='cfg-tagBuilder' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.Matcher'>Autolinker.matcher.Matcher</span><br/><a href='source/Matcher.html#Autolinker-matcher-Matcher-cfg-tagBuilder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.Matcher-cfg-tagBuilder' class='name expandable'>tagBuilder</a> : <a href=\"#!/api/Autolinker.AnchorTagBuilder\" rel=\"Autolinker.AnchorTagBuilder\" class=\"docClass\">Autolinker.AnchorTagBuilder</a><span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>Reference to the AnchorTagBuilder instance to use to generate HTML tags\nfor <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Matches</a>.</p>\n</div><div class='long'><p>Reference to the AnchorTagBuilder instance to use to generate HTML tags\nfor <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Matches</a>.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.Matcher'>Autolinker.matcher.Matcher</span><br/><a href='source/Matcher.html#Autolinker-matcher-Matcher-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.matcher.Matcher-method-constructor' class='name expandable'>Autolinker.matcher.Matcher</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'><p>The configuration properties for the Matcher\n  instance, specified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseMatches' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.Matcher'>Autolinker.matcher.Matcher</span><br/><a href='source/Matcher.html#Autolinker-matcher-Matcher-method-parseMatches' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.Matcher-method-parseMatches' class='name expandable'>parseMatches</a>( <span class='pre'>text</span> ) : <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a>[]<span class=\"signature\"><span class='abstract' >abstract</span></span></div><div class='description'><div class='short'>Parses the input text and returns the array of Matches\nfor the matcher. ...</div><div class='long'><p>Parses the input <code>text</code> and returns the array of <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Matches</a>\nfor the matcher.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>The text to scan and replace matches in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a>[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"abstract":true}});