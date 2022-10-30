{{
    // @ts-ignore
    function node(name, attributes, content){
        var x$, that;
        x$ = {
            node: name
        };
        if (that = attributes) {
            // @ts-ignore
            x$.attrs = that;
        }
        if (content && content.length) {
            // @ts-ignore
            x$.content = content;
        }
        return x$;
    }
    // @ts-ignore
    function reduceToObj(xs){
        var x$, attr, setField, i$, y$, len$;
        x$ = attr = {};
        // @ts-ignore
        setField = function(x){
            if (x && x.name) {
            return attr[x.name] = x.text;
            }
        };
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
            y$ = xs[i$];
            setField(y$);
        }
        return x$;
    }
}}

Document = __ nodes:RootNode { return nodes; }

Element  = Nested / Void / Text

RootNode    "root element"   = begin:TagBegin __ content:Element* __ end:TagEnd __ &{ return begin.node == end && begin.node == 'SibirianitDoc'; } {
    return node(begin.node, begin.attrs, content);
  }

Nested    "nested element"   = begin:TagBegin __ content:Element* __ end:TagEnd __ &{ return begin.node == end; } {
    return node(begin.node, begin.attrs, content);
  }


Text "text"
  = chars:(c:[^<] { return c })+ {
    return node('Text', null, chars.join(''));
  }
  / chars:(!TagEnd !Void c:. { return c })+ {
    return node('Text', null, chars.join(''));
  }

TagBegin  "begin tag" = '<'  name:TagName attrs:Attributes '>' { return node(name, attrs, null); }
TagEnd    "end tag"   = '</' name:TagName __               '>' { return name; }

Void      "element"   = '<' name:TagName attrs:Attributes ('/>' / '>') __ { return node(name, attrs, null); }

Attributes = __ attrs:Attribute* __ { if (attrs && attrs.length) return reduceToObj(attrs); }

Attribute "attribute"
  = name:Symbol __ text:(__ '=' __ s:String { return s; })? __ { return {name, text}; }
  / !'/>' [^> ]+ __ { return null; }

String "string"
  = '"'  chars:[^"]*      '"'  __ { return chars.join(''); }
  / '\'' chars:[^']*      '\'' __ { return chars.join(''); }
  /      chars:[^"'<>` ]+      __ { return chars.join(''); }

TagName = 'SibirianitDoc' / 'Paragraph' / 'DiscList' / 'ListItem' / 'YandexMusic' / 'Image' / 'CheckList' / 'StateListItem' / 'Emoji'

Symbol = h:[a-zA-Z0-9_\-] t:[a-zA-Z0-9:_\-]* { return h.concat(t.join('')); }

__ "space characters"
  = [\r\n \t\u000C]*