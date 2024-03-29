var g_modulesList = [
  "crc32", "etc.c.zlib", "etc.gamma", "gcstats", "object", "std.array",
  "std.asserterror", "std.base64", "std.bind", "std.bitarray", "std.boxer",
  "std.c.fenv", "std.c.linux.linux", "std.c.linux.linuxextern",
  "std.c.linux.pthread", "std.c.linux.socket", "std.c.locale", "std.c.math",
  "std.c.process", "std.c.stdarg", "std.c.stddef", "std.c.stdio",
  "std.c.stdlib", "std.c.string", "std.c.time", "std.c.windows.com",
  "std.c.windows.stat", "std.c.windows.windows", "std.c.windows.winsock",
  "std.compiler", "std.conv", "std.cover", "std.cpuid", "std.cstream",
  "std.ctype", "std.date", "std.dateparse", "std.demangle", "std.file",
  "std.format", "std.gc", "std.intrinsic", "std.loader", "std.math",
  "std.math2", "std.md5", "std.metastrings", "std.mmfile", "std.moduleinit",
  "std.openrj", "std.outbuffer", "std.outofmemory", "std.path", "std.perf",
  "std.process", "std.random", "std.regexp", "std.signals", "std.socket",
  "std.socketstream", "std.stdarg", "std.stdint", "std.stdio", "std.stream",
  "std.string", "std.switcherr", "std.syserror", "std.system", "std.thread",
  "std.traits", "std.typeinfo.ti_AC", "std.typeinfo.ti_Acdouble",
  "std.typeinfo.ti_Acfloat", "std.typeinfo.ti_Acreal",
  "std.typeinfo.ti_Adouble", "std.typeinfo.ti_Afloat", "std.typeinfo.ti_Ag",
  "std.typeinfo.ti_Aint", "std.typeinfo.ti_Along", "std.typeinfo.ti_Areal",
  "std.typeinfo.ti_Ashort", "std.typeinfo.ti_C", "std.typeinfo.ti_byte",
  "std.typeinfo.ti_cdouble", "std.typeinfo.ti_cfloat", "std.typeinfo.ti_char",
  "std.typeinfo.ti_creal", "std.typeinfo.ti_dchar", "std.typeinfo.ti_delegate",
  "std.typeinfo.ti_double", "std.typeinfo.ti_float", "std.typeinfo.ti_idouble",
  "std.typeinfo.ti_ifloat", "std.typeinfo.ti_int", "std.typeinfo.ti_ireal",
  "std.typeinfo.ti_long", "std.typeinfo.ti_ptr", "std.typeinfo.ti_real",
  "std.typeinfo.ti_short", "std.typeinfo.ti_ubyte", "std.typeinfo.ti_uint",
  "std.typeinfo.ti_ulong", "std.typeinfo.ti_ushort", "std.typeinfo.ti_void",
  "std.typeinfo.ti_wchar", "std.typetuple", "std.uni", "std.uri", "std.utf",
  "std.windows.charset", "std.windows.iunknown", "std.windows.registry",
  "std.windows.syserror", "std.zip", "std.zlib",
];

function M(name, fqn, sub)
{
  sub = sub ? sub : [];
  return {
    name: name, fqn: fqn, sub: sub,
    kind : (sub && sub.length == 0) ? "module" : "package"
  };
}
var P = M;

var g_moduleObjects = [
  P('etc','etc',[
    P('c','etc.c',[
      M('zlib','etc.c.zlib'),
    ]),
    M('gamma','etc.gamma'),
  ]),
  P('std','std',[
    P('c','std.c',[
      P('linux','std.c.linux',[
        M('linux','std.c.linux.linux'),
        M('linuxextern','std.c.linux.linuxextern'),
        M('pthread','std.c.linux.pthread'),
        M('socket','std.c.linux.socket'),
      ]),
      P('windows','std.c.windows',[
        M('com','std.c.windows.com'),
        M('stat','std.c.windows.stat'),
        M('windows','std.c.windows.windows'),
        M('winsock','std.c.windows.winsock'),
      ]),
      M('fenv','std.c.fenv'),
      M('locale','std.c.locale'),
      M('math','std.c.math'),
      M('process','std.c.process'),
      M('stdarg','std.c.stdarg'),
      M('stddef','std.c.stddef'),
      M('stdio','std.c.stdio'),
      M('stdlib','std.c.stdlib'),
      M('string','std.c.string'),
      M('time','std.c.time'),
    ]),
    P('typeinfo','std.typeinfo',[
      M('ti_AC','std.typeinfo.ti_AC'),
      M('ti_Acdouble','std.typeinfo.ti_Acdouble'),
      M('ti_Acfloat','std.typeinfo.ti_Acfloat'),
      M('ti_Acreal','std.typeinfo.ti_Acreal'),
      M('ti_Adouble','std.typeinfo.ti_Adouble'),
      M('ti_Afloat','std.typeinfo.ti_Afloat'),
      M('ti_Ag','std.typeinfo.ti_Ag'),
      M('ti_Aint','std.typeinfo.ti_Aint'),
      M('ti_Along','std.typeinfo.ti_Along'),
      M('ti_Areal','std.typeinfo.ti_Areal'),
      M('ti_Ashort','std.typeinfo.ti_Ashort'),
      M('ti_byte','std.typeinfo.ti_byte'),
      M('ti_C','std.typeinfo.ti_C'),
      M('ti_cdouble','std.typeinfo.ti_cdouble'),
      M('ti_cfloat','std.typeinfo.ti_cfloat'),
      M('ti_char','std.typeinfo.ti_char'),
      M('ti_creal','std.typeinfo.ti_creal'),
      M('ti_dchar','std.typeinfo.ti_dchar'),
      M('ti_delegate','std.typeinfo.ti_delegate'),
      M('ti_double','std.typeinfo.ti_double'),
      M('ti_float','std.typeinfo.ti_float'),
      M('ti_idouble','std.typeinfo.ti_idouble'),
      M('ti_ifloat','std.typeinfo.ti_ifloat'),
      M('ti_int','std.typeinfo.ti_int'),
      M('ti_ireal','std.typeinfo.ti_ireal'),
      M('ti_long','std.typeinfo.ti_long'),
      M('ti_ptr','std.typeinfo.ti_ptr'),
      M('ti_real','std.typeinfo.ti_real'),
      M('ti_short','std.typeinfo.ti_short'),
      M('ti_ubyte','std.typeinfo.ti_ubyte'),
      M('ti_uint','std.typeinfo.ti_uint'),
      M('ti_ulong','std.typeinfo.ti_ulong'),
      M('ti_ushort','std.typeinfo.ti_ushort'),
      M('ti_void','std.typeinfo.ti_void'),
      M('ti_wchar','std.typeinfo.ti_wchar'),
    ]),
    P('windows','std.windows',[
      M('charset','std.windows.charset'),
      M('iunknown','std.windows.iunknown'),
      M('registry','std.windows.registry'),
      M('syserror','std.windows.syserror'),
    ]),
    M('array','std.array'),
    M('asserterror','std.asserterror'),
    M('base64','std.base64'),
    M('bind','std.bind'),
    M('bitarray','std.bitarray'),
    M('boxer','std.boxer'),
    M('compiler','std.compiler'),
    M('conv','std.conv'),
    M('cover','std.cover'),
    M('cpuid','std.cpuid'),
    M('cstream','std.cstream'),
    M('ctype','std.ctype'),
    M('date','std.date'),
    M('dateparse','std.dateparse'),
    M('demangle','std.demangle'),
    M('file','std.file'),
    M('format','std.format'),
    M('gc','std.gc'),
    M('intrinsic','std.intrinsic'),
    M('loader','std.loader'),
    M('math','std.math'),
    M('math2','std.math2'),
    M('md5','std.md5'),
    M('metastrings','std.metastrings'),
    M('mmfile','std.mmfile'),
    M('moduleinit','std.moduleinit'),
    M('openrj','std.openrj'),
    M('outbuffer','std.outbuffer'),
    M('outofmemory','std.outofmemory'),
    M('path','std.path'),
    M('perf','std.perf'),
    M('process','std.process'),
    M('random','std.random'),
    M('regexp','std.regexp'),
    M('signals','std.signals'),
    M('socket','std.socket'),
    M('socketstream','std.socketstream'),
    M('stdarg','std.stdarg'),
    M('stdint','std.stdint'),
    M('stdio','std.stdio'),
    M('stream','std.stream'),
    M('string','std.string'),
    M('switcherr','std.switcherr'),
    M('syserror','std.syserror'),
    M('system','std.system'),
    M('thread','std.thread'),
    M('traits','std.traits'),
    M('typetuple','std.typetuple'),
    M('uni','std.uni'),
    M('uri','std.uri'),
    M('utf','std.utf'),
    M('zip','std.zip'),
    M('zlib','std.zlib'),
  ]),
  M('crc32','crc32'),
  M('gcstats','gcstats'),
  M('object','object'),
];