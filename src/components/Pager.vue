<template id="pager">
    <div>
      <div class="pager" v-if="totalPage > 1">
        <div>
          <a v-if="pageArr.length > 1"  href="javascript:void(0)" v-on:click="setPage('first')">首页</a>
          <a v-if="pageArr.length > 1" href="javascript:void(0)" v-on:click="setPage('prev')">上一页</a>
          <a v-if="index-4 >1 " v-on:click="setPage(1)" v-bind:class="[(1 == currNum ? 'active':'')]" href="javascript:void(0)"> 1</a>
          <a v-if="(index-4 >1) && pageArr.length > 9" href="javascript:void(0)" >...</a>
          <a href="javascript:void(0)"  v-on:click="setPage(val)"  v-bind:class="[(val == currNum ? 'active':'')]" v-for="(val, pageindex) in pageArrPager" v-bind:key="pageindex" >{{val}}</a>
          <a v-if="pageArr.length > index+4"  href="javascript:void(0)" >...</a>
          <a v-if="pageArr.length > 9 && pageArr.length > index+3"   v-on:click="setPage(pageArr.length)"  v-bind:class="[(pageArr.length == index ? 'active':'')]" href="javascript:void(0)" >{{pageArr.length}}</a>
          <a v-if="pageArr.length > 1"  href="javascript:void(0)" v-on:click="setPage('next')">下一页</a>
          <a v-if="pageArr.length > 1"   href="javascript:void(0)" v-on:click="setPage('last')">尾页</a>
          转到<input type="text" v-model = "goPageIndex" />页
          <button class="btn btn-light-blue" v-on:click="goPage()">跳转</button>
        </div>
      </div>
    </div>
  </template>
  <script>
    // import {com}   from '../../../src/js/commom.js'
    export default{
      name:'PagerPage',
      data(){
        return{
          pageArr:[],
          pageArrPager:[],
          pagerIndex:this.index,
          goPageIndex:'',
          currNum:1
        }
      },
      props:['totalPage','index'],
      methods:{
        setPage(val){
          if(val =='first'){ // 首页
            this.pagerIndex =1;
            this.currNum = 1
          }else if(val == 'prev'){ // 上一页
            if(this.pagerIndex >1){
              this.currNum--
              this.pagerIndex = this.pagerIndex - 1
            }
          }else if(val == 'next'){ // 下一页
            if(this.pagerIndex <this.totalPage){
              this.currNum+=1
              this.pagerIndex = this.pagerIndex + 1
            }
          }else if(val == 'last'){ // 尾页
            this.pagerIndex = this.pageArr.length
            this.currNum = this.pageArr.length
          }else{
            this.currNum = val
            this.pagerIndex = parseInt(val)
          }
          this.getData()
        },
        getData(){
          this.$emit('changeIndex',this.pagerIndex)
        },
        initPageArr(){
          this.pageArr= []
          for(var i=0;i<this.totalPage; i++){
            this.pageArr.push(i+1)
          }
          if(this.pageArr.length >9){ //分页的省略号优化
            if(this.pagerIndex > 5 ){
              if(this.pageArr.length-3 >this.pagerIndex || this.pageArr.length-3 == this.pagerIndex ){
                this.pageArrPager =this.pageArr.slice(this.pagerIndex-4,this.pagerIndex+3)
                // console.log(this.pageArrPager)
              } else if((this.pageArr.length-3 < this.pagerIndex && this.pagerIndex < this.pageArr.length)||this.pagerIndex == this.pageArr.length ) {
                this.pageArrPager =this.pageArr.slice(this.pageArr.length-8,this.pageArr.length)
              }
            }else{
              this.pageArrPager =this.pageArr.slice(0,8)
            }
          }else{
            this.pageArrPager =this.pageArr.slice(0)
          }
        },
        goPage(){
          var re = /^[0-9]+$/ //正整数
          var goPageIndex  = parseInt(this.goPageIndex)
          if(!(re.test(goPageIndex) && goPageIndex > 0 && goPageIndex <= this.totalPage)) {
            // com.errorTip("请输入正确的页码数")
            alert("请输入正确的页码数")
          }
          else{
            this.pagerIndex = goPageIndex;
            this.currNum = goPageIndex
            this.getData();
          }
   
        }
      },
      mounted(){
        this.initPageArr()
      },
      watch:{
        index: function(newindex, oldindex){
          if(newindex != oldindex){
            this.pagerIndex = newindex;
            this.initPageArr()
          }
        },
        totalPage:function(newTotalPage,oldTotalPage){
          if(newTotalPage != oldTotalPage){
            this.initPageArr()
          }
        }
      }
    }
  </script>
  <style scoped>
    .pager {
      padding: 10px;
      /* position: absolute; */
      bottom: 20px;
      font-size: 14px
    }
    .relative{
      position: relative;
    }
    .pager a {
      display: inline-block;
      vertical-align: middle;
      border: 1px solid #eaedf1;
      border-radius: 2px;
      padding: 4px;
      min-width: 16px;
      text-align: center;
      margin: 0 2px;
      background-color:#fff;
    }
    .pager a.active {
      background-color: #4c8df1;
      color: #fff;
    }
    a:active, a:focus, a:hover, a:visited {
      text-decoration: none;
      outline: 0;
    }
    a {
      color: #333;
      text-decoration: none;
      transition: .25s;
    }
    .pager input {
      width: 40px;
      border: 1px solid #eaedf1;
      margin: 4px;
      padding: 5px;
    }.pager .btn {
       margin: 0 4px;
     }
    .btn-light-blue:hover {
      background-color: #4c8ddd;
    }
    .btn {
      letter-spacing: 2px;
    }
    .btn {
      text-align: center;
    }
    .btn-light-blue {
      color: #fff;
    }
    .bg-blue, .btn-light-blue {
      background-color: #4c8df1;
    }
    .btn {
      display: inline-block;
      padding: 6px 12px;
      margin-bottom: 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42857143;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 4px;
    }
    * {
      outline: none;
    }
    .pager > a{
      cursor: pointer;
    }
  </style>