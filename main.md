# Purpose #
dil is a hand-crafted compiler implementation for the D programming language written in D 1.0 using the [Tango](http://dsource.org/projects/tango) standard library. The lexer and the parser are fully implemented. Semantic analysis is being worked on. The backend will most probably be [LLVM](http://llvm.org) (or gcc if LLVM fails.)

What dil can do at the present:
  * dil is fully internationalized and can output compiler messages in English, German, Turkish and Finnish. You can determine which language to use with a setting in the configuration file.
  * Generate documentation from DDoc comments. In comparison to dmd, dil has fewer bugs and also offers a few goodies. Example: documentation of [Tango v0.99.7](http://dil.googlecode.com/files/Tango_doc_0.99.7.zip).
    * Unicode alphas are supported in macro, section and parameter names.
    * Every symbol can be linked to its source location.
    * Protection, linkage and storage class attributes are shown in brackets.
    * Reports warnings for undefined macros and unterminated macros (missing closing ')'.)
    * Every token in a code section is highlighted (customizable via html\_map.d.)
    * Undocumented symbols can be included in the documentation using the '-i'-switch.
    * Shortcomings: symbols aren't highlighted in comment texts (rather for practical reasons;) variables/parameters with a DeclaratorSuffix (e.g. `int a[]`) are slightly problematic; sometimes it shows that semantic info is lacking.
  * Generate XML or HTML documents. You can choose to generate tags for tokens only or you can also have the whole parse tree unparsed. The whitespace of the original source file is preserved. You can view the HTML documents in any browser you like. The XML documents can only be viewed in W3C-standards compatible browsers(`*`) in combination with an XML formatting CSS document. dil provides two ordinary CSS documents (for XML/HTML) which can be customized to one's heart's content. Example: dil's source code in [XML](http://dil.googlecode.com/files/xml_rev709.zip) or [HTML](http://dil.googlecode.com/files/html_rev709.zip). (`*`Note: Internet Explorer is the only browser that spectacularly fails at this job.)
  * Produce module dependency graphs using the graphviz dot format. For example, see the [dot file](http://dil.googlecode.com/files/main.2.dot) of dil: rendered in [SVG](http://dil.googlecode.com/files/main.2.svg), [PNG](http://dil.googlecode.com/files/main.2.png) (2.7MB) or [GIF](http://dil.googlecode.com/files/main.2.gif). Cyclic edges (import statements) and nodes (modules) are highlighted in red. The edges of public imports are bold.
  * Output code statistics (lines of code, count syntax tree nodes and tokens, number of whitespace characters etc.) When dil has advanced enough [OO-metrics](http://www.aivosto.com/project/help/pm-oo-ck.html) will be supported. Example: [dstress](http://dil.googlecode.com/files/stats_dstress_r1835_2.txt) (1.5MB text; totals are at the bottom)

  * dil can parse D 2.0 additions:
    * Delimited and token [string literals](http://www.digitalmars.com/d/2.0/lex.html#StringLiteral).
    * [ForeachRangeStatement](http://www.digitalmars.com/d/2.0/statement.html#ForeachRangeStatement).
    * Optional [TemplateParameterList in IsExpression](http://www.digitalmars.com/d/2.0/expression.html#IsExpression).
    * const and invariant in IsExpressions.
    * [TemplateThisParameter](http://www.digitalmars.com/d/2.0/template.html#TemplateThisParameter).
    * Cast expressions: `cast(const)` and `cast(invariant)`.
    * Type constructors: `const(Type)` and `invariant(Type)`.
    * const and invariant attributes after the parameter list of a function (C++ style.)
    * `typeof(return)`.
    * Traits expressions: `__traits(Identifier)` and `__traits(Identifier, TemplateArguments)`.
    * const/invariant/final/scope/static as storage classes in parameter lists (e.g. `void func(ref const Foo f);`).
    * invariant as a storage class for declarations (e.g. `invariant Foo f;`).
    * The identifier `__EOF__` is interpreted as the end of file.
    * [Template Constraints](http://www.digitalmars.com/d/2.0/template.html#Constraint).
    * `auto` return type for [Function Templates](http://www.digitalmars.com/d/2.0/template.html#function-templates).
    * Modified syntax for [Enums](http://www.digitalmars.com/d/2.0/enum.html) (manifest constants.)

Features you will or might see in dil:
  * Refactoring (renaming symbols, modules; changing the type of a symbol etc.)
  * Coding rules enforcement.
  * Code search.
  * Code analysis (lint-like).
  * Code formatting.
  * Translate D code to other languages.
  * Port D 1.0 code to D 2.0.

**Meaning:**

The word dil comes from the Turkish language and means among other things a) tongue or b) language.
It is a very fitting name for this project because of its meaning and because it starts with the letter d and for the reason that the project owner has Turkish origins.

### Contact ###
Feel free to join my channel, #dil, which I've set up on freenode.net.
You can also send me a plain e-Mail if you have questions regarding my project.

### License ###
Some people might not like the license under which dil is currently being developed.
In fact, it could be off-putting for some programmers who would like to contribute to it or make use of it as a client.
However, please keep in mind that a lot of hours were spent in order to come up with a compiler that is well documented and has a solid design.
It is not unlikely that the author will put the project under a less restrictive license one time or another.
It could be LGPL3 or even BSD.
It very much depends on how many cookies and apple pies somebody might be willing to stuff the author with.

## Download ##
There are no downloadable binaries yet.
If you have [DSSS](http://dsource.org/projects/dsss) you can use the fetch command, "`dsss net fetch dil.zip`", to get the latest revision of the source code.
Click the "Source"-tab to find out how to get the sources using Mercurial.