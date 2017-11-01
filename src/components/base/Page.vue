<template>
  <div>
    <ul class="pagination">
      <li v-if="current != 1" @click="current-- && goto(current)">
        <a href="javascript:;" :title="'skyloong' + current">上一页</a>
      </li>
      <li v-if="current == 1">
        <span class="notClick notAllow">上一页</span>
      </li>
      <li v-for="index in pages" @click="goto(index)" :class="{'active': current == index}" :key="index">
        <a href="javascript:;">{{index}}</a>
      </li>
      <li v-if="current != totalPages" @click="current++ && goto(current++)">
        <a href="javascript:;">下一页</a>
      </li>
      <li  v-if="totalPages == current">
        <span class="notClick notAllow">下一页</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        current: 1,
        showItem: 5,
        totalPages: 100,
        totalRows: 50,
        pageRows: 10
      }
    },
    computed: {
      pages: function () {
        var page = []
        for (var i = 1; i <= this.showItem; i++) {
          if ((this.current - this.showItem / 2) <= 0) {
            page.push(i)
          } else if ((Number(this.current) + this.showItem / 2 - 1) >= this.totalPages) {
            var num = this.totalPages - Number(this.showItem) + i
            page.push(num)
          } else {
            num = this.current - Math.ceil(this.showItem / 2) + i
            page.push(num)
          }
        }
        return page
      }
    },
    methods: {
      goto (index) {
        if (index === this.current) return
        this.current = index
      }
    }
  }
</script>

<style>

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .pagination {
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
    left: 10%;
  }

  .pagination li {
    display: inline-block;
    margin: 0 2px;
  }

  .pagination li a {
    padding: 4px 10px;
    display: inline-block;
    border: 1px solid #ddd;
    background: #fff;
    color: #0E90D2;
  }

  .pagination .notClick {
    padding: 4px 10px;
    display: inline-block;
    border: 1px solid #ddd;
    background: #fff;
    color: #909090;
  }

  .pagination li a:hover {
    background: #eee;
  }

  .pagination li.active a {
    background: #0E90D2;
    color: #fff;
  }

  .pagination .notAllow {
    cursor: not-allowed;
  }
</style>
