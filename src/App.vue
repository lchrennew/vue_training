<template>
    <div id="app">
        <h1>TODO List</h1>
        <div class="nav">
            <a href="#" class="active">列表</a>
            <a href="#">已删除</a>
            <a href="#">完成记录</a>
        </div>

        <div class="creater">
            <input type="text" placeholder="添加任务">
            <button>添加</button>
        </div>
        <div class="list">
            <div class="item">
                <input type="checkbox">
                <div class="title">
                    Item1
                </div>
                <div class="action">
                    <button>删除</button>
                </div>
            </div>
            <div class="item">
                <input type="checkbox">
                <div class="title">
                    Item1
                </div>
                <div class="action">
                    <button>删除</button>
                </div>
            </div>
            <div class="item">
                <input type="checkbox">
                <div class="title">
                    Item1
                </div>
                <div class="action">
                    <button>删除</button>
                </div>
            </div>
            <div class="item">
                <input type="checkbox">
                <div class="title">
                    Item1
                </div>
                <div class="action">
                    <button>删除</button>
                </div>
            </div>
            <div class="item">
                <input type="checkbox">
                <div class="title">
                    Item1
                </div>
                <div class="action">
                    <button>删除</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style lang="less" scoped>
    #app {
        width: 800px;

        .nav {
            display: flex;
            flex-direction: row;
            margin-bottom: 10px;

            a {
                color: #42bacc;
                text-decoration: none;
                margin-right: 10px;
                padding: 3px 10px;

                &.active {
                    color: #fff;
                    background-color: #42bacc;
                }
            }
        }

        .creater {
            border-radius: 4px;
            border: solid #ccc 1px;
            padding: 10px;
            margin-bottom: 10px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            input {
                display: flex;
                margin-right: 10px;
                flex: 1;
            }

            button {
                display: flex;
            }
        }

        .list {
            display: flex;
            flex-direction: column;
            border-radius: 4px;
            border: solid #ccc 1px;
            padding: 10px;

            .item {
                display: flex;
                flex-direction: row;
                padding: 5px 10px;
                align-items: center;

                .title {
                    display: flex;
                    flex: 1;
                    margin-left: 10px;
                }

                .action {
                    display: flex;
                }

                &:hover {
                    background-color: #d9ecff;
                }

            }
        }
    }
</style>
