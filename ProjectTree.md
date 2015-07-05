# Project Tree #

As DIL has grown quite a bit in its life time, it has become a necessity to document its structure. Interested developers can view this guide and quickly gain a good understanding of the location of various components in the system.

  * **`data/`**<br>Contains dilconf.d (the configuration file of DIL,) language files and other files that are required by some subcommands in DIL.<br>
<ul><li><b><code>i18n/</code></b><br>Language catalogue files. Part of src/translator/. Not in use at the moment.<br>
</li><li><b><code>kandil/</code></b><br>An XHTML/JS front-end for documentation of D source files. See <a href='http://code.google.com/p/dil/wiki/Kandil'>Kandil's wiki page</a>.<br>
</li><li><b><code>scripts/</code></b><br>Very useful utility scripts are located here.<br>
<ul><li><code>build.py</code>: Build DIL with this if you don't have or want <a href='http://dsource.org/projects/dsss'>DSSS</a>.<br>
</li><li><code>phobos_doc.py</code>: Generates documentation for Phobos and optionally creates a zip archive.<br>
</li><li><code>tango_doc.py</code>: Like phobos_doc.py, but for Tango.<br>
</li><li><code>typerules.d</code>: Generates interesting tables of type rules in the compiler that compiles it.<br>
</li></ul></li><li><b><code>src/</code></b><br>The source folder which holds most of the source files.<br>
<ul><li><b><code>cmd/</code></b><br>Modules that implement the subcommands of the main application.<br>
</li><li><b><code>dil/</code></b><br>The root package of the project.<br>
<ul><li><b><code>ast/</code></b><br>Includes modules for building (full) parse trees (not abstract syntax trees which have less information.)<br>
<ul><li><code>Node.d</code>: Contains the abstract base class from which all other parse tree elements derive.<br>
</li><li><code>Visitor.d</code>: Implements an abstract base class for traversing parse trees.<br>
</li></ul></li><li><b><code>code/</code></b><br>Will contain or contains modules related to interpreting code and generating LLVM IR trees (Intermediate Representation.)<br>
</li><li><b><code>doc/</code></b><br>Modules that allow for documentation generation are located here.<br>
<ul><li><code>DDocEmitter.d</code>: Has a class that traverses a parse tree and emits macros with text to a buffer.<br>
</li><li><code>Doc.d</code>: Consists of classes and functions which find, sanitize and parse Ddoc comments into sections.<br>
</li><li><code>Macro.d</code>: Implements Ddoc macro expansion.<br>
</li></ul></li><li><b><code>lexer/</code></b><br>Everything related to the lexing process is present here.<br>
<ul><li><code>Lexer.d</code>: The Lexer lives here.<br>
</li></ul></li><li><b><code>parser/</code></b>
<ul><li><code>Parser.d</code>: The place where the huge Parser resides. She's best friends with the Lexer.<br>
</li></ul></li><li><b><code>semantic/</code></b><br>The analytic system that tries to make sense of the code you throw at it. Throws it back if it doesn't.<br>
<ul><li><code>Passes.d</code>: The semantic passes that go over a module until all symbols are resolved.<br>
</li><li><code>Symbols.d</code>: Classes, structs, variables, functions, templates etc. are symbols.<br>
</li><li><code>Types.d</code>: All the semantic types are in this file.<br>
</li></ul></li><li><b><code>translator/</code></b>
<ul><li><code>German.d</code>: A feeble attempt on a class that translates D code into German.<br>
</li></ul></li><li><code>Compilation.d</code>: The CompilationContext class encloses important parameters relevant to the compilation process. E.g.: debug/release build, finding modules, sizes of machine dependent types, 32/64Bit code generation etc.<br>
</li><li><code>Diagnostics.d</code>: Just a class that collects error messages to be printed to the console.<br>
</li><li><code>ModuleManager.d</code>: Searches for modules in include dirs, loads them and manages them in tables. Reports errors if modules conflict with packages or other modules.<br>
</li><li><code>Version.d</code>: Know the version of the compiler.<br>
</li></ul></li><li><b><code>tests/</code></b><br>Some test cases for the compiler.<br>
</li><li><b><code>translator/</code></b><br>My failed attempt at writing a GUI app with PyQt4 for managing language catalogues (using the YAML format.)<br>
</li><li><code>main.d</code>: The main application with a command-line interface that drives the functions of DIL.<br>
</li></ul></li><li><b><code>wiki/</code></b><br>Contains the wiki pages, like this one you're reading.<br>
</li><li><code>AUTHORS</code>: Lists people contributing to this project. Contains my personal testament; just in case I get struck down by a lightning from Zeus (I keep having naughty thoughts of Aphrodite.)<br>
</li><li><code>COPYING</code>: The main license of this project (GPL3.)<br>
</li><li><code>dsss.conf</code>: A makefile used by DSSS to build DIL.<br>
</li><li><code>README</code>: Mostly describes how to build DIL.