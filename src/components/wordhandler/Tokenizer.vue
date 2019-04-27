<style>
    .container {
        /* background-color: var(--bgcolor); */
        /* padding-top: 1%; */
        width: 99%;
    }

    .trading-section {
        min-height: 500px;
    }

    .current_div {
        margin-right: 80px;
        margin-left: 80px;
        margin-top: 75px !important;
    }

    @media screen and (max-width: 850px) {
        .container-fluid {
            margin-right: 1px;
            margin-left: 1px;
            margin-top: 15px;
            margin-bottom: 1px;
            padding-left: 1px;
            padding-right: 1px;
        }
        .invest-block {
            margin: 20px 10px 5px 10px !important;
            border-color: transparent;
            border-width: 2px !important;
            border-radius: 5px;
            /*background-color: #f9faf5;*/
            opacity: 0.9;
        }


        .el-dialog{
            width: 95% !important;
        }
        .igo_body{
            width: 90% !important;
        }
        .el-carousel__item span {
            color: #ea0302;
            font-size: 14px;
            opacity: 0.9;
            line-height: 25px !important;
            /*margin: ;*/
            position: relative;
            text-align: center;
            /*top: 35%;*/
            vertical-align: middle;
            display: block;
        }
        .el-menu-demo img {
            width: 90px;
            height: 35px;
        }

        .claim{
            margin:12px 1px !important;
            border-radius:8%;
        }
        .action_button{
            width:70px !important;
            padding: 8px 1px !important;
        }
        #community_btn {
            display: none;
        }

        #howtoplay_btn {
            display: none;
        }

        #trading_btn {
            display: none;
        }
        #ref_btn {
            display: none;
        }

        .form {
            width: 100% !important;
            border-radius: 5px;
            font-size: 18px;
            background-color: #4b2512;
            /*margin: 1px;*/
            /*padding: 20px 30px;*/
        }

        .info-container ul > li > span {
            color: #fff;
            font-size: 0.8em !important;
            font-weight: 600;
            letter-spacing: .5px;
            align-items: center;

        }
        .el-table_5_column_26{
            display: none;
        }
        .fairparty_brand {
            font-style: italic;
            color: #9901d1;
            font-size: 2em;
            font-weight: 800;
        }
    }
    .tokenizerDiv{
        padding-top: 10%
    }
</style>

<template>
    <div class="tokenizerDiv">
        <div class="row">
            <lac-handler></lac-handler>
        </div>
    </div>
</template>

<script>
    import LacHandler from "./Lachandler.vue";

    export default {
        name: "tokenizer",
        components: {
            LacHandler
        }
    };
</script>
