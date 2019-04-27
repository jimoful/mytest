<style>
    .navbar-inverse {
        background-color: #000820;
    }

    .navbar-brand {
        height: 55px;
    }

    .navbar-brand img {
        width: 35px;
        height: 35px;
    }

    svg:not(:root).svg-inline--fa:hover {
        background-color: #6C2DED;
    }

    svg:not(:root).svg-inline--fa {
        border-radius: 25%;
        border-width: medium;
        /*padding: 10px;*/
        cursor: pointer;
        font-size: 1.2em;
        transition: background-color ease 200ms;
    }

    .el-dialog__header {
        color: #fafafa !important;
        text-shadow: 0 0 0.2em rgb(27, 213, 226), -0 -0 0.1em #f87;
        font-size: large;
        font-weight: 600;
        font-style: italic;
    }

    .el-dialog__body {
        color: #fafafa !important;
        font-size: medium !important;
        /*padding: 10px 30px !important;*/
        margin-bottom: 30px;
    }

    .el-dialog {
        border-radius: 10px;
        background: linear-gradient(left top, #1f2345, #31397b) !important;

    }

    .el-card {
        border-color: transparent !important;
        border-width: 0.001em !important;
        margin-top: 25px;
        background-color: transparent !important;
        border-radius: 10px;
    }

    /* card ::shadow */
    .el-card.is-always-shadow,
    .el-card.is-hover-shadow:focus, F
    .el-card.is-hover-shadow:hover {
        border-color: rgb(106, 11, 12);
        box-shadow: 0px 0px 10px rgb(35, 38, 97);
    }

    @-webkit-keyframes neonred {
        from {
            text-shadow: 0 0 3px #b3adff,
            0 0 10px #FF1177,
            0 0 20px #FF1177
        }
        to {
            text-shadow: 0 0 3px #b3adff,
            0 0 10px #ff2a36,
            0 0 15px #FF1177,
            0 0 30px #FF1177
        }
    }

    @-webkit-keyframes neongreen {
        from {
            text-shadow: 0 0 3px rgba(44, 170, 44, 0.56),
            0 0 5px #2caa2c,
            0 0 10px #2caa2c
        }
        to {
            text-shadow: 0 0 3px rgba(44, 170, 44, 0.56),
            0 0 5px #2caa2c,
            0 0 10px #2caa2c,
            0 0 15px #2caa2c
        }
    }

    @keyframes changeshadow {
        0% {
            text-shadow: 0 0 4px #4cc134
        }
        50% {
            text-shadow: 0 0 20px #4cc134
        }
        100% {
            text-shadow: 0 0 4px #4cc134
        }
    }

    /* 添加兼容性前缀 */
    @-webkit-keyframes changeshadow {
        0% {
            text-shadow: 0 0 4px #4cc134
        }
        50% {
            text-shadow: 0 0 40px #4cc134
        }
        100% {
            text-shadow: 0 0 4px #4cc134
        }
    }

    @-moz-keyframes changeshadow {
        0% {
            text-shadow: 0 0 4px #4cc134
        }
        50% {
            text-shadow: 0 0 40px #4cc134
        }
        100% {
            text-shadow: 0 0 4px #4cc134
        }
    }

    @-ms-keyframes changeshadow {
        0% {
            text-shadow: 0 0 4px #4cc134
        }
        50% {
            text-shadow: 0 0 40px #4cc134
        }
        100% {
            text-shadow: 0 0 4px #4cc134
        }
    }

    @-o-keyframes changeshadow {
        0% {
            text-shadow: 0 0 4px #4cc134
        }
        50% {
            text-shadow: 0 0 40px #4cc134
        }
        100% {
            text-shadow: 0 0 4px #4cc134
        }
    }

</style>


<style scoped>
    .el-col-6 {
        text-align: center;
    }

    .fairparty_brand {
        font-style: italic;
        color: #27dd8a;
        font-size: 2em;
        font-weight: 800;
        -webkit-animation: neonred 2s ease-in-out infinite alternate;
        -moz-animation: neonred 2s ease-in-out infinite alternate;
        animation: neonred 2s ease-in-out infinite alternate;
    }

    #community_dialog span {
        font-size: 20px;
    }

    .referral_body {
        display: flex;
    }

    #referral_input {
        border-radius: 5px;
        border-color: transparent;
    }

    #igo_input {
        border-radius: 5px;
        border-color: transparent;
    }

    .referral_copy {
        background-color: #27dd8a;
        border-color: transparent;
        margin-bottom: 15px;
        margin-left: 10px;
    }

    .roar_act {
        margin: 20px 15px;
        text-align: center !important;
        background-color: #27dd8a;
        border-color: transparent;
    }

    .el-textarea__inner {
        background-color: #71a1fa !important;
        color: black;
    }

    .igo_body {
        display: flex;
        width: 60%;
        /*margin-right: 10px;*/
    }

    .glyphicon {
        font-weight: 800 !important;
    }

    .glyphicon:hover {
        color: #69a0ea !important;
    }

    .igo_btn {
        /*font-size: 20px;*/
        color: #4cc134;
        font-weight: 400;
        /*margin: 10px;*/
        animation: changeshadow 3s ease-in infinite;
        /* 其它浏览器兼容性前缀 */
        -webkit-animation: changeshadow 3s linear infinite;
        -moz-animation: changeshadow 3s linear infinite;
        -ms-animation: changeshadow 3s linear infinite;
        -o-animation: changeshadow 3s linear infinite;
    }

    .langCheck {
        float: right !important;
    }

</style>

<template>
    <div>
        <div class="navbar navbar-fixed-top navbar-inverse " role="navigation">
            <div class="container">
                <div class="navbar-header nav-title ">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!--<a class="navbar-brand" href="index.html"><img src="../../public/fairicon.png"/></a>-->
                    <a class="navbar-brand fairparty_brand" href="#">FAIRPARTY</a>
                    <a href="#" v-if="!widthFlag">
                        <img src="../static/images/flag-hk.png" class="navbar-right navbar-brand langCheck"
                             v-if="langFlag"
                             @click="langAct()"/>

                        <img src="../static/images/flag-en.jpg" class="navbar-right navbar-brand langCheck" v-else
                             @click="langAct()"/>
                    </a>
                </div>
                <div class="collapse navbar-collapse navbar-right is-collapse">
                    <ul class="nav navbar-nav">
                        <li>
                            <a href="#" v-if="widthFlag">
                                <img src="../static/images/flag-hk.png"
                                     class="glyphicon"
                                     v-if="langFlag"
                                     @click="langAct()" height="20px"/>

                                <img src="../static/images/flag-en.jpg" class="glyphicon"
                                     v-else
                                     @click="langAct()" height="20px"/>
                            </a>
                        </li>
                        <li><a href="#"><span class="glyphicon nav-item" @click="showHow=true">{{$t('nav.how')}}</span></a>
                        </li>
                        <li><a href="#"><span class="glyphicon" @click="showSocial=true">{{$t('nav.community')}}</span></a>
                        </li>
                        <li><a href="#"><span class="glyphicon invite_btn"
                                              @click="showRef=true">{{$t('nav.ref')}}</span></a></li>
                        <li><a href="#"><span class="glyphicon igo_btn"
                                              @click="showIgo=true">{{$t('nav.igo')}}</span></a></li>
                        <li><a href="#"><span class="glyphicon roar_btn"
                                              @click="showRoarAct">{{$t('nav.roar')}}</span></a></li>
                        <li><a href="#"><span class="glyphicon about_btn"
                                              @click="showAbout=true">{{$t('nav.about')}}</span></a></li>
                        <!--<li><a href="#"><span class="glyphicon">checkIn</span></a></li>-->

                        <li><a href="#"><span class="glyphicon glyphicon-user" style="text-shadow: black 5px 3px 3px;"
                                              @click="login">
                {{userName===''?$t('nav.login'):userName}}
              </span></a></li>
                    </ul>
                </div><!-- /.nav-collapse -->
            </div><!-- /.container -->

        </div>
        <el-dialog id="community_dialog" width="50%"
                   :visible.sync="showSocial">
            <p slot="title">{{$t('nav.community')}}</p>
            <el-row type="flex" justify="center">
                <el-col :span="6">
                    <span @click="navigate('discord')">
                        <font-awesome-icon :icon="['fab', 'discord']"/>
                    </span>
                </el-col>
                <el-col :span="6">
                    <span @click="navigate('twitter')">
                        <font-awesome-icon :icon="['fab', 'twitter']"/>
                    </span>
                </el-col>
                <el-col :span="6">
                    <span @click="navigate('github')">
                        <font-awesome-icon :icon="['fab', 'github']"/>
                    </span>
                </el-col>
                <el-col :span="6">
                    <span @click="navigate('medium')">
                        <font-awesome-icon :icon="['fab', 'medium-m']"/>
                    </span>
                </el-col>

            </el-row>
        </el-dialog>

        <el-dialog
                width="60%"
                :visible.sync="showRef">
            <p slot="title" style="color: #fafafa;text-shadow: 0 0 0.1em rgb(27, 213, 226), -0 -0 0.1em #f87;">
                {{$t('nav.ref_title')}}</p>
            <div class="referral_body">
                <el-input id="referral_input"
                          placeholder=""
                          v-model="inviteLink">
                </el-input>
                <el-button class="referral_copy" @click="copyReferral">{{$t('nav.copy')}}</el-button>
            </div>
            <p style="font-style: italic;color:#4cc134">{{$t('nav.ref_text')}}</p>
        </el-dialog>


        <el-dialog
                width="60%"
                :visible.sync="showRoar">
            <p slot="title" style="color: #fafafa;text-shadow: 0 0 0.1em rgb(27, 213, 226), -0 -0 0.1em #f87;">
                {{$t('nav.roar_title')}}</p>
            <div class="referral_body">
                <el-input id="iroar"
                          type="textarea"
                          :rows="3"
                          placeholder=""
                          v-model="roarText">
                </el-input>
                <el-button class="roar_act" @click="iroarAct">{{$t('nav.roar')}}</el-button>
            </div>

            <p style="margin-top: 5px;font-style: italic;font-size: 15px;color:#4cc134">
                {{$t('code.roar_alert_msg')}}</p>

            <p style="margin-top: 5px;font-style: italic;font-size: 15px;color:#c15151">
                {{$t('code.my_roar')}}{{my_roar_msg}}</p>
        </el-dialog>

        <el-dialog
                width="60%"
                :visible.sync="showAbout">
            <p slot="title" style="color: #fafafa;text-shadow: 0 0 0.1em rgb(27, 213, 226), -0 -0 0.1em #f87;">
                {{$t('nav.about')}}</p>
            <div class="policy"><p style="text-indent:2em;font-weight: 400;color:#4cc134">{{$t('code.about_msg')}}</p>
            </div>

        </el-dialog>

        <el-dialog
                width="60%"
                :visible.sync="showIgo">
            <p slot="title" style="color: #fafafa;text-shadow: 0 0 0.1em rgb(27, 213, 226), -0 -0 0.1em #f87;">
                IGO</p>
            <div class="igo_body referral_body">
                <el-input id="igo_input" size='small' placeholder="1 EOS = 1000 FP"
                          v-model="igo">
                </el-input>
                <el-button class="referral_copy" @click="igoAct" :loading="investLoadingNav">{{$t('nav.igo')}}
                </el-button>
            </div>
            <p style="font-style: italic;color:#4cc134">1 EOS = 1000 FP,{{$t('nav.igo_msg')}}{{igo}}000 FP</p>
        </el-dialog>
        <el-dialog
                width="60%"
                :visible.sync="showHow">
            <p slot="title">{{$t('nav.how_title')}}</p>
            <ol style="font-weight: normal;font-size:15px;font-style: italic;color:#4cc134"
                v-html="$t('dialog.howtoplay_text')">
            </ol>
        </el-dialog>
    </div>
</template>

<script>
    import api from '../utils/eos';
    import EOS from "eosjs";
    import config from '../utils/config';


    export default {
        data() {
            return {
                activeIndex: "1",
                userName: "",
                islogin: false,
                dialogVisible: false,
                alertInfo: "",
                alertTitle: "",
                eosClient: null,
                scatterEosClient: null,
                interval: null,
                showSocial: false,
                showAbout: false,
                showRef: false,
                showIgo: false,
                igo: 10,
                investLoadingNav: false,
                my_roar_msg: '',
                showHow: false,
                showRoar: false,
                eosScatter: null,
                roarText: '',
                langFlag: true
            };
        },
        methods: {
            loginAct() {
                if (this.$store.state.userName !== "") {
                    this.userName = this.$store.state.userName;
                    return;
                }
                let self = this;
                if (window.scatter == null) {
                    self.$message({
                        message: self.$t('code.scatter_install'),
                        type: "warning",
                        duration: 2500,
                        center: true
                    });
                    window.open(
                        "https://chrome.google.com/webstore/detail/scatter/ammjpmhgckkpcamddpolhchgomcojkle"
                    );
                    return;
                }

                window.scatter.getIdentity({
                    accounts: [config.eosNetwork]
                }).then(identity => {
                    if (identity && identity.accounts.length > 0) {
                        this.account = identity.accounts.find(
                            account => account.blockchain === "eos"
                        );
                        self.userName = this.account.name;
                        self.$store.state.userName = self.account.name;

                        self.$store.state.actionTime = new Date().getTime();
                        self.$message({
                            message: self.$t('code.scatter_login'),
                            type: "success",
                            duration: 1500,
                            center: true
                        });
                    }
                }).catch(error => {
                    if (error['code'] === 423) {
                        error = self.$t('code.scatter_lock');
                    }
                    self.$message({
                        message: error,
                        type: "error",
                        duration: 1500,
                        center: true
                    });
                });

            },
            langAct() {
                if (this.langFlag) {
                    this.langFlag = false;
                    this.$i18n.locale = 'en';
                    this.$notify({
                        title: 'Success',
                        message: 'Welcome to FAIR PARTY！',
                        type: 'success',
                        duration: 1000
                    });
                    this.$store.commit("setActionTime", new Date().getTime());


                } else {
                    this.langFlag = true;
                    this.$i18n.locale = 'zh';
                    this.$notify({
                        title: '成功',
                        message: '欢迎来到公平盛宴！',
                        type: 'success',
                        duration: 1000
                    });
                    this.$store.commit("setActionTime", new Date().getTime());

                }

            },
            showRoarAct() {
                let self = this;
                self.showRoar = true;
                Promise.all([
                    api.getTableRows({
                        json: true,
                        code: config.gameContract,
                        table: 'players',
                        lower_bound: self.$store.state.userName,
                        limit: 1,
                        scope: config.gameContract //todo
                    }),
                ]).then(([result]) => {
                    if (result.rows.length > 0) {
                        self.my_roar_msg = result.rows[0]['msg']
                    }
                });

            },
            iroarAct() {
                let self = this;
                let eos = window.scatter.eos(config.eosConfig, EOS, {});
                const account = window.scatter.identity.accounts.find(
                    account => account.blockchain === "eos"
                );
                eos.transaction({
                    actions: [
                        {
                            account: config.gameContract,
                            name: "roar",
                            authorization: [
                                {
                                    actor: account.name,
                                    permission: account.authority
                                }
                            ],
                            data: {
                                from: account.name,
                                memo: self.roarText
                            }
                        }
                    ]
                }).then(tx => {
                    self.$message({
                        message: self.$t('code.roar_suc_msg'),
                        type: "success",
                        duration: 1000,
                        center: true
                    });
                    self.$store.commit("setActionTime", new Date().getTime());
                }).catch(error => {
                    self.$message({
                        message: self.$t('code.roar_fail_msg'),
                        type: "error",
                        duration: 10000,
                        center: true
                    });
                });
            }
            ,
            igoAct() {
                let self = this;
                self.loginAct();
                let eos = window.scatter.eos(config.eosConfig, EOS, {});

                var amount = parseInt(self.igo).toFixed(4) + " " + config.mainToken;
                var from = self.$store.state.userName;
                self.investLoadingNav = true;
                eos.transfer({from: from, to: config.gameContract, quantity: amount, memo: 'igo'})
                    .then(tx => {
                        self.$message({
                            message: self.$t('code.igo_msg'),
                            type: "success",
                            duration: 2000,
                            center: true
                        });
                        self.investLoadingNav = false;

                    })
                    .catch(e => {
                        let msg = JSON.parse(e)['error']['details'][0]['message'];
                        self.$message({
                            message: msg,
                            type: "error",
                            duration: 2000,
                            center: true
                        });
                        self.investLoadingNav = false;
                    });
            }
            ,
            copyReferral() {
                const range = document.createRange();
                range.selectNode(document.getElementById('referral_input'));

                const selection = window.getSelection();
                if (selection.rangeCount > 0) selection.removeAllRanges();
                selection.addRange(range);
                document.execCommand('copy');
                this.$message({
                    message: "success",
                    type: "success",
                    duration: 1000,
                    center: true
                });
            }
            ,
            navigate(brand) {
                switch (brand) {
                    case "twitter":
                        window.open("//twitter.com/dappPub");
                        break;
                    case "medium":
                        window.open("//medium.com/dapppub");
                        break;
                    case "github":
                        window.open("//github.com/dappub");
                        break;
                    case "discord":
                        window.open(
                            "//discordapp.com/channels/482077322070196225/487187255065313292"
                        );
                        break;
                }
            }
            ,
            login() {
                if (this.userName !== "") {
                    this.logout();
                    return;
                }
                let self = this;
                if (window.scatter == null) {
                    self.$message({
                        message: self.$t('code.scatter_install'),
                        type: "warning",
                        duration: 2500,
                        center: true
                    });
                    window.open(
                        "https://chrome.google.com/webstore/detail/scatter/ammjpmhgckkpcamddpolhchgomcojkle"
                    );
                }
                let clientType = this.getClientType();
                console.log(clientType);
                window.scatter.getIdentity({
                    accounts: [config.eosNetwork]
                }).then(identity => {
                    if (identity && identity.accounts.length > 0) {
                        this.account = identity.accounts.find(
                            account => account.blockchain === "eos"
                        );
                        self.userName = this.account.name;
                        self.islogin = true;
                        self.$store.state.userName = self.account.name;
                        self.$store.state.actionTime = new Date().getTime();
                        self.$message({
                            message: self.$t('code.scatter_login'),
                            type: "success",
                            duration: 1500,
                            center: true
                        });
                    }
                }).catch(error => {
                    if (error['code'] === 423) {
                        error = self.$t('code.scatter_lock');
                    }
                    self.$message({
                        message: error,
                        type: "error",
                        duration: 1500,
                        center: true
                    });
                });
            }
            ,
            logout() {
                let self = this;
                window.scatter.forgetIdentity().then(() => {
                    console.log("forget");
                    self.islogin = false;
                    self.userName = "";
                    self.$message({
                        message: "退出成功！",
                        type: "success",
                        duration: 1000,
                        center: true
                    });
                });
                self.$store.commit("setUserName", "");
            }
            ,
            checkIn() {
                var self = this;

                function login_event(event) {
                    self.login();
                }

                if (self.$store.state.userName === "") {
                    console.log("scatter is not login!");
                    self.$message({
                        message: "请先登录！",
                        type: "warning",
                        duration: 1000,
                        center: true,
                        onClose: login_event
                    });
                    return;
                }
                const account = window.scatter.identity.accounts.find(
                    account => account.blockchain === "eos"
                );

                // hard code
                const eos = window.scatter.eos(config.eosConfig, EOS, {});
                eos.transaction({
                    actions: [
                        {
                            account: config.gameContract,
                            name: "check",
                            authorization: [
                                {
                                    actor: account.name,
                                    permission: account.authority
                                }
                            ],
                            data: {
                                account: account.name
                            }
                        }
                    ]
                }).then(tx => {
                    console.log(tx);
                    self.$message({
                        message: "签到成功！",
                        type: "success",
                        duration: 1000,
                        center: true
                    });
                    self.$store.commit("setActionTime", new Date().getTime());
                }).catch(error => {
                    // let msg = "签到失败，";
                    // if (error.indexOf("play") != -1) {
                    //   msg += "请投注一次再签到！";
                    // } else if (error.indexOf("next day") != -1) {
                    //   msg += "签到冷却中！";
                    // }
                    self.$message({
                        message: error,
                        type: "error",
                        duration: 10000,
                        center: true
                    });
                });
            }
            ,
            handleClose(done) {
                done();
                console.log("close!");
                // this.$confirm("确认关闭？")
                //   .then(_ => {
                //     done();
                //   })
                //   .catch(_ => {});
            }
            ,
            getClientType() {
                var u = navigator.userAgent,
                    w = window.location.href,
                    t = this.parseUrl(w);
                if (u.match(/Windows|/i) != null) {
                    return "window";
                }
                if (u.match(/Android/i) != null) {
                    //android设备
                    return "Android";
                } else if (u.match(/iPhone|iPod/i) != null) {
                    //IOS
                    return "IOS";
                } else {
                    return "WP";
                }
            }
            ,
            //取p值
            parseUrl(url) {
                var pattern = /(\w+)=([^\#&]*)/gi,
                    parames = {};
                url = url || window.location.href;
                url.replace(pattern, function (attr, key, value) {
                    parames[key] = decodeURI(value);
                });
                return parames;
            }
        }
        ,
        computed: {
            inviteLink() {
                return "http://www.fairparty.club?ref=" + this.$store.state.userName
            },
            widthFlag() {
                return window.screen.width > 800;
            },
        }
        ,
        mounted() {
            let self = this;
            // setTimeout(self.loginAct, 3000);
            if (this.interval) {
                clearInterval(this.interval);
            }
            this.interval = setInterval(() => {
                self.$store.commit("setActionTime", new Date().getTime());
            }, 5000);
        }
        ,
        watch: {
            "$store.state.userName":

                function () {
                    this.userName = this.$store.state.userName;
                }

            ,
        }
        ,
    }
    ;
</script>
