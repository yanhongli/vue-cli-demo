<template>
    <div>
        <el-row class="title">
            今日数据概览
        </el-row>
        <el-row type="flex" align="middle" justify="space-between">
            <el-row type="flex" align="middle">
                <img src="../assets/pv.png" class="indicator-img"/>
                <el-row type="flex" style="flex-direction: column">
                    浏览量
                    <span>{{pv | numberFormat}}</span>
                </el-row>
            </el-row>
            <el-row type="flex" align="middle">
                <img src="../assets/uv.png" class="indicator-img"/>
                <el-row type="flex" style="flex-direction: column">
                    访客量
                    <span>{{uv | numberFormat}}</span>
                </el-row>
            </el-row>
            <el-row type="flex" align="middle">
                <img src="../assets/convert.png" class="indicator-img"/>
                <el-row type="flex" style="flex-direction: column">
                    转化量
                    <span>{{convert | numberFormat}}</span>
                </el-row>
            </el-row>
            <el-row type="flex" align="middle">
                <img src="../assets/convert-percent.png" class="indicator-img"/>
                <el-row type="flex" style="flex-direction: column">
                    转化率
                    <span>{{convertPercent | numberFormat("0.00")}}</span>
                </el-row>
            </el-row>
            <el-row type="flex" align="middle">
                <img src="../assets/stay.png" class="indicator-img"/>
                <el-row type="flex" style="flex-direction: column">
                    平均停留时长
                    <span>{{stay | numberFormat("0.00")}}</span>
                </el-row>
            </el-row>
            <el-row type="flex" align="middle">
                <img src="../assets/jump-out.png" class="indicator-img"/>
                <el-row type="flex" style="flex-direction: column">
                    跳出率
                    <span>{{jumpOut | numberFormat("0.00")}}</span>
                </el-row>
            </el-row>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pv: 100,
            uv: 50,
            convert: 11,
            convertPercent: 20.0981,
            stay: 0.98,
            jumpOut: 40.898
        }
    }
}
</script>
<style lang="scss" scoped>
    .title {
        border-bottom: 1px solid #dbdbdb;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
    .indicator-img{
        width: 55px;
        height: 55px;
        margin-right: 15px;
        border-radius: 50%;
        &:hover{
            box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.6);
        }
    }
</style>