# Differences #
This is a list of syntactical changes from D1 to D2:
  * Delimited and token [string literals](http://www.digitalmars.com/d/2.0/lex.html#StringLiteral).
  * [ForeachRangeStatement](http://www.digitalmars.com/d/2.0/statement.html#ForeachRangeStatement).
  * Optional [TemplateParameterList in IsExpression](http://www.digitalmars.com/d/2.0/expression.html#IsExpression).
  * const and immutable in IsExpressions.
  * [TemplateThisParameter](http://www.digitalmars.com/d/2.0/template.html#TemplateThisParameter).
  * Cast expressions: `cast()` (cast to mutable), `cast(const)`, `cast(immutable)` and `cast(shared)`.
  * Not-in expression: `x !in assocArray`
  * Type constructors: `const(Type)`, immutable(Type)` and shared(Type)`.
  * Const qualifiers: `const int*` is the same as `const(int*)`.
  * `@` attributes: @disable, @property, @safe, @system and @trusted.
  * const, immutable and other attributes after the parameter list of a function (C++ style.)
  * `typeof(return)`.
  * Traits expressions: `__traits(Identifier)` and `__traits(Identifier, TemplateArguments)`.
  * const/invariant/final/scope/static as storage classes in parameter lists (e.g. `void func(ref const Foo f);`).
  * invariant as a storage class for declarations (e.g. `invariant Foo f;`).
  * The identifier `__EOF__` is interpreted as the end of file.
  * [Template Constraints](http://www.digitalmars.com/d/2.0/template.html#Constraint).
  * `auto` return type for [Function Templates](http://www.digitalmars.com/d/2.0/template.html#function-templates).
  * Modified syntax for [Enums](http://www.digitalmars.com/d/2.0/enum.html) (manifest constants.)
  * CaseRangeStatement: `case m: .. case n:`
  * Single template argument syntax: `something!int` is the same as `something!(int)`.
  * `mixin template` [declarations](http://www.digitalmars.com/d/2.0/template-mixin.html).
  * Expressions in TemplateAliasParameter: `template cmp(alias Pred : "specialization" = "default value" ) {...}`