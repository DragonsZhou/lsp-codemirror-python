<template>
  <codemirror
  ref="pythonEditor"
  class="codemirror-textarea"
  v-model="code" 
  :options="cmOptions"
  @ready="onCmReady">
  </codemirror>
</template>

<script>
import 'codemirror/mode/python/python.js'
// 主题css
import 'codemirror/theme/idea.css'
// require active-line.js
import 'codemirror/addon/selection/active-line.js'
// closebrackets
import 'codemirror/addon/edit/closebrackets.js'

// 代码段折叠功能
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'
import 'codemirror/addon/fold/xml-fold.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/comment-fold.js';

// 自动括号匹配功能
import 'codemirror/addon/edit/matchbrackets'

//安装show-hint插件
import "codemirror/addon/hint/show-hint.js";
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';



import { LspWsConnection, CodeMirrorAdapter } from 'lsp-codemirror';
import 'lsp-editor-adapter/lib/codemirror-lsp.css';




export default {
  components:{
  },
  data() {
    return {
      code: 'python',
      cmOptions: {
        tabSize: 4, // tabsize默认为4
        styleActiveLine: true,
        direction: "ltr",
        contenteditable:"true",
        // 显示行数
        lineNumbers: true,
        line: true,

        lineWrapping: true,    // 自动换行

        matchBrackets:true,  //括号匹配


        mode: 'text/x-python', // 选择代码语言
        extraKeys: {"Ctrl": "autocomplete"},   //自动提示配置 
        
        theme: 'idea' // 主题根据需要自行配置
      }
    }
  },
  methods: {
    onCmReady(editor) {
      
      const python={
          serverUri: 'ws://localhost:45000/python',
          languageId: 'python',
          rootUri: 'D:/CodeProjects/html/HTMLProjects/vue2test/src',
          documentUri: 'D:/CodeProjects/html/HTMLProjects/vue2test/src/App.vue',
          documentText: () => editor.getValue(),
        }
      const pythonConnection = new LspWsConnection(python).connect(new WebSocket(python.serverUri));
      const pythonAdapter = new CodeMirrorAdapter(
        pythonConnection, 
        {
          suggestOnTriggerCharacters: false
        }, 
        editor
      );
    }
  },

  computed:{
  },
  created(){
    // setInterval(function(){
    //     //获取元素
        
    //     let item=document.getElementById("cm-complete-0").children;
    //     for (let i = 0; i < item.length; i++) {
    //       console.log(item[i]);
    //     }
    //   },3000);
  },
  watch:{
  },
  mounted(){
  }
}
</script>
<style>
.codemirror-textarea{
  font-family: Arial, monospace;
  font-size: 16px;
  text-align: left;
}

li.CodeMirror-hint img{
  width:10px;
  height:10px;
}
li.CodeMirror-hint span{
  margin-left: 4px;
  font-family: Arial, monospace;
  font-size: 14px;
}

</style>