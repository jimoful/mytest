<style>
    .el-table {
        background-color: transparent;
    }

    .el-card__body {
        padding: 1px;
        margin-top: 1px;
        margin-bottom: 15px !important;
    }

    .el-tabs__nav {
        float: none !important;
        text-align: center;
        font-size: 20px;
        margin: 2px 10px;
    }

    .el-table .warning-row {
        background: rgba(223, 9, 26, 0.68);
        border-style: dashed !important;
    }

    .el-table .success-row {
        /*background: #2a402a;*/
        border-style: dotted !important;

    }

    .el-table--enable-row-hover .el-table__body tr:hover > td {
        background-color: rgba(123, 120, 117, 0.51) !important;
    }

    .el-table--enable-row-transition .el-table__body td {
        border-style: dashed none none none !important;
        border-color: #3cd3d0;
        border-width: thin;
    }

    .el-table .owner-row {
        color: #fff !important;
        font-weight: 900 !important;
        font-size: large;
    }

    /* tab 文字颜色 */
    .el-tabs__item {
        color: #8c8c8c;
        font-weight: bolder;
        font-size: medium;

    }

    .el-tabs__item:hover i {
        transform: rotate(360deg);
        -ms-transform: rotate(360deg); /* IE 9 */
        -moz-transform: rotate(360deg); /* Firefox */
        -webkit-transform: rotate(360deg); /* Safari 和 Chrome */
        -o-transform: rotate(360deg); /* Opera */
        transition-duration: 1s
    }

    .el-tabs__nav-wrap,
    .el-tabs__nav-scroll,
    .el-tabs--card > .el-tabs__header .el-tabs__item {
        border-color: transparent;
    }

    .el-table thead {
        color: rgb(248, 239, 239);
    }

    /* table字颜色 */
    .el-table__empty-block,
    .el-table th,
    .el-table tr {
        background-color: transparent;
        color: rgb(252, 255, 199);
        font-style: oblique;
        /*text-shadow: 0 0 0.2em rgb(27, 213, 226), -0 -0 0.1em #f87;*/
    }

    .el-table__empty-text {
        font-size: medium;
    }

    /* table borde */
    .el-table td,
    .el-table th.is-leaf {
        border-color: transparent;
        /*border-width: 0.1rem;*/
    }

    .el-card__header {
        /*border-width: 0.2em;*/
        font-size: medium;
        border-color: transparent;
        text-shadow: 0 0 0.2em rgb(27, 213, 226), -0 -0 0.2em #f87;
    }

    .el-tabs--card > .el-tabs__header {
        border-bottom: 0.2em solid #2e3572;
        background-color: transparent !important;
    }

    .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
        border-color: transparent;
    }

    .el-tabs--border-card > .el-tabs__header {
        background-color: transparent !important;
        border-color: #2e3572 !important;
        border-width: medium;
    }

    .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
        background-color: #2e3572;
        border-radius: 5px;
        border-color: transparent !important;
        color: #fafafa;
    }

    .el-tabs--card > .el-tabs__header .el-tabs__nav {
        border-color: transparent;
        /*border-width: 0.2em;*/
    }

    .el-table__body {
        border-color: transparent;
    }

    span {
        color: rgb(253, 253, 253);
        font-weight: bold;
    }

    .el-table__row:hover {
        background-color: -moz-default-background-color !important;
    }

    .el-tabs--card > .el-tabs__header .el-tabs__item:first-child {
        font-weight: 800 !important;
    }

    .el-tabs--card > .el-tabs__header .el-tabs__item:last-child {
        font-weight: 800 !important;
    }


</style>

<template>
    <div class="container-fluid">
        <el-card shadow="hover">
            <el-tabs height="350" stripe v-model="activeName" type="card"
                     @tab-click="handleClick">
                <el-tab-pane :label="$t('records.mybet')" name="myRecords">
                    <el-table :default-sort="{prop: 'block_time', order: 'descending'}" :data="myRecords"
                              :row-class-name="tableMyRowClass"
                              style="width: 100%">
                        <el-table-column align="center" header-align="center" prop="block_time"
                                         :label="$t('records.record_time')">
                        </el-table-column>
                        <el-table-column align="center" header-align="center" prop="accountName"
                                         :label="$t('records.record_bettor')">
                        </el-table-column>
                        <el-table-column align="center" header-align="center" v-if="widthFlag"
                                         prop="rollUnder"
                                         :label="$t('records.record_range')">
                        </el-table-column>
                        <el-table-column align="center" header-align="center" v-if="widthFlag" prop="diceNumber"
                                         :label="$t('records.record_roll')">
                        </el-table-column>
                        <el-table-column align="center" header-align="center" v-if="widthFlag" prop="betAsset"
                                         :label="$t('records.record_bet')">
                        </el-table-column>
                        <el-table-column align="center" header-align="center" prop="payoutAsset"
                                         :label="$t('records.record_profit')">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane :label="$t('records.allbet')" name="history">
                    <el-table :data="records" :row-class-name="tableRowClassName" style="width: 100%">
                        <el-table-column align="center" header-align="center" prop="block_time"
                                         :label="$t('records.record_time')">
                        </el-table-column>
                        <el-table-column align="center" header-align="center" prop="accountName"
                                         :label="$t('records.record_bettor')">
                        </el-table-column>
                        <el-table-column align="center" header-align="center" v-if="widthFlag"
                                         prop="rollUnder"
                                         :label="$t('records.record_range')">
                        </el-table-column>
                        <el-table-column align="center" header-align="center" v-if="widthFlag" prop="diceNumber"
                                         :label="$t('records.record_roll')">
                        </el-table-column>
                        <el-table-column align="center" header-align="center" v-if="widthFlag" prop="betAsset"
                                         :label="$t('records.record_bet')">
                        </el-table-column>
                        <el-table-column align="center" header-align="center" prop="payoutAsset"
                                         :label="$t('records.record_profit')">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane :label="$t('records.allbids')" name="lastbid">
                    <el-table :data="records" :row-class-name="tableBidClassName" style="width: 100%">
                        <el-table-column align="center" header-align="center" prop="block_time"
                                         :label="$t('records.record_time')">
                        </el-table-column>
                        <el-table-column align="center" header-align="center" prop="accountName"
                                         :label="$t('records.record_bettor')">
                        </el-table-column>
                        <el-table-column align="center" header-align="center" prop="payoutAsset"
                                         :label="$t('records.record_profit')">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                activeName: "history",
                highlight: false,
                interVal: null,
                myRecords: [],
                records: [],
                myuniqRecord: {},
                history: [],

            };
        },
        methods: {
            tableRowClassName({row, rowIndex}) {
                //   if (row.bettor === this.$store.state.userName) {
                if (row.payoutAsset === "0.0000 EOS") {
                    if (row.accountName === this.$store.state.userName) {
                        return "warning-row owner-row";
                    }
                    return "warning-row";
                } else {
                    if (row.accountName === this.$store.state.userName) {
                        return "success-row owner-row";
                    }
                    return "success-row";
                }

            },
            tableMyRowClass({row, rowIndex}) {
                //   if (row.bettor === this.$store.state.userName) {
                if (row.payoutAsset === "0.0000 EOS") {
                    return "warning-row";
                } else {
                    return "success-row";
                }

            },
            tableBidClassName({row, rowIndex}) {
                if (row.payoutAsset === "0.0000 EOS") {
                    return "warning-row";
                } else {
                    return "success-row";
                }
            },
            dateFormat(t) {
                var e = new Date(t + "Z").toTimeString();
                return e = e.split(" ")[0], e
            },
            handleClick(tab, event) {
            },
            handleWs() {
                var self = this;
                var wss = new WebSocket(
                    "wss://mainnet.eos.dfuse.io/v1/stream?token=eyJhbGciOiJLTVNFUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDQ3MjM5NTQsImp0aSI6IjI0MTdiYmE5LTJjZDAtNDhjNS04ZDIyLTIzZjIxMWFhZGEyYyIsImlhdCI6MTU0MjEzMTk1NCwiaXNzIjoiZGZ1c2UuaW8iLCJzdWIiOiJDaVFBNmNieWUzN05TK25ILzdzejZRcDBFQXEwNFRMSGdHYmRnV0h0MUhVdS9EQVZPdW9TT0FBL0NMUnRDL2VxTkE3cExqNjhIMHhTVGwxSEdXT1VRZzdVYWp6NVBuSDFheHBQTXNzeERoVXFpWmc0bWo5d3R1TldrR0p0K0NORCIsInRpZXIiOiJiZXRhLXYxIiwidiI6MX0.yiqi4bkdXh2YK9XXp_vkUHEI2lKPw-B1CueZYchPz_nW-GGovNgWunxnX4xyEkaJ92nl9Gxk8qlvuXGC4tfKkw"
                );

                var msg = {
                    type: "get_actions",
                    listen: !0,
                    data: {
                        account: "eosbiggame44",
                        action_name: "receipt",
                        receiver: "eosbiggame44"
                    }
                };
                wss.onopen = function () {
                    return wss.send(JSON.stringify(msg));
                };
                wss.onmessage = function (wss) {
                    var n = JSON.parse(wss.data);
                    if ("action_trace" === n.type) {
                        var a = n.data.trace;
                        self.records.length > 20 && self.records.pop();
                        var o = {
                            // block_time: self.dateFormat(a.block_time),
                            // accountName: a.act.data.result.player,
                            // rollUnder: a.act.data.result.roll_under,
                            // betAsset: a.act.data.result.amount,
                            // diceNumber: a.act.data.result.random_roll,
                            // payoutAsset: a.act.data.result.payout
                            block_time: self.dateFormat(a.block_time),
                            accountName: a.act.data.bet.player,
                            rollUnder: a.act.data.bet.roll_under,
                            betAsset: a.act.data.bet.amount,
                            diceNumber: a.act.data.bet.random_roll,
                            payoutAsset: a.act.data.bet.payout
                        };
                        self.records.unshift(o);
                        o.accountName === self.$store.state.userName &&
                        (o.rollUnder > o.diceNumber
                            ? self.$notify({
                                title: 'Congratulations',
                                dangerouslyUseHTMLString: true,
                                message: '<strong>ROLL: <i>' + o.diceNumber + '</i> WIN!</strong>',
                                type: 'success'
                            })
                            : self.$notify({
                                title: 'Pity',
                                dangerouslyUseHTMLString: true,
                                message: '<strong>ROLL: <i>' + o.diceNumber + '</i> LOST!</strong>',
                                type: 'error'
                            }),
                        self.myRecords.length > 20 && self.myRecords.pop(),
                            self.myRecords.unshift(o));
                    }
                };
                wss.onclose = function () {
                    console.log("reconnect"), 3 === wss.readyState && self.handleWs();
                };
            }
        },
        // mounted() {
        //   this.getMyRecord();
        // },
        watch: {
            "$store.state.actionTime": function () {
                if (this.$store.state.userName === "") {
                    return;
                }
            }
        },
        beforeDestory() {
            // clearInterval(this.interVal);
        },
        mounted() {
            this.handleWs();
        },
        computed: {
            widthFlag() {
                return window.screen.width > 800;
            },
        }
    };
</script>
