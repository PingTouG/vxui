## Icon 图标

图标采用 `iconfont`

### 使用方法

<p>
  <x-icon name="search" />
  <x-icon name="settings" />
  <x-icon name="seleted" />
</p>

```vue
<p>
  <x-icon name="search" />
  <x-icon name="settings" />
  <x-icon name="seleted" />
</p>
```

### 图标集合

<div class="icon-group">
  <div class="icon-item">
    <div class="item-icon"><x-icon name="search" /></div>
    <div class="item-name">search</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="seleted" /></div>
    <div class="item-name">seleted</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="settings" /></div>
    <div class="item-name">settings</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="return" /></div>
    <div class="item-name">return</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="close-circle" /></div>
    <div class="item-name">close-circle</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="fullsreen" /></div>
    <div class="item-name">fullsreen</div>
  </div>
</div>

<div class="icon-group">
  <div class="icon-item">
    <div class="item-icon"><x-icon name="loading" /></div>
    <div class="item-name">loading</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="down" /></div>
    <div class="item-name">down</div>
  </div>
    <div class="icon-item">
    <div class="item-icon"><x-icon name="up" /></div>
    <div class="item-name">up</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="download" /></div>
    <div class="item-name">download</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="double-left" /></div>
    <div class="item-name">double-left</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="double-right" /></div>
    <div class="item-name">double-right</div>
  </div>
</div>

<div class="icon-group">
  <div class="icon-item">
    <div class="item-icon"><x-icon name="customer" /></div>
    <div class="item-name">customer</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="clock" /></div>
    <div class="item-name">clock</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="close" /></div>
    <div class="item-name">close</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="browse" /></div>
    <div class="item-name">browse</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="delete" /></div>
    <div class="item-name">delete</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="add" /></div>
    <div class="item-name">add</div>
  </div>
</div>

<div class="icon-group">
  <div class="icon-item">
    <div class="item-icon"><x-icon name="arrow-down" /></div>
    <div class="item-name">arrow-down</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="arrow-up" /></div>
    <div class="item-name">arrow-up</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="arrow-left" /></div>
    <div class="item-name">arrow-left</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="arrow-right" /></div>
    <div class="item-name">arrow-right</div>
  </div>
    <div class="icon-item">
    <div class="item-icon"><x-icon name="notvisible" /></div>
    <div class="item-name">notvisible</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="data" /></div>
    <div class="item-name">data</div>
  </div>
</div>

<div class="icon-group">
  <div class="icon-item">
    <div class="item-icon"><x-icon name="editor" /></div>
    <div class="item-name">editor</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="history" /></div>
    <div class="item-name">history</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="copy" /></div>
    <div class="item-name">copy</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="code" /></div>
    <div class="item-name">code</div>
  </div>
    <div class="icon-item">
    <div class="item-icon"><x-icon name="bussiness-man" /></div>
    <div class="item-name">bussiness-man</div>
  </div>
  <div class="icon-item">
    <div class="item-icon"><x-icon name="all" /></div>
    <div class="item-name">all</div>
  </div>
</div>

<style>
.icon-group{
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
}

.icon-item{
  display: flex;
  flex-direction: column;
  width: 80px;
}


.item-icon,.item-name{
  height: 25px;
  text-align:center;
  word-break: break-all;
}

.icon-item i{
  font-size: 25px !important;
}
</style>
