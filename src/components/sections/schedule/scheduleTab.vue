<template>
    <div class="scheduleTab">
        <table class="scheduleTab__table">
            <tbody class="scheduleTab__tbody">
                <tr class="scheduleTab__tr">
                    <td class="scheduleTab__td teamTab">Home team</td>
                    <td class="scheduleTab__td">
                        <span>
                            <span>69</span>
                            <span>:</span>
                            <span>89</span>
                        </span>
                    </td>
                    <td class="scheduleTab__td teamTab">Gues team</td>
                </tr>
                <tr class="scheduleTab__tr">
                    <td colspan="3" class="scheduleTab__td">Wrocław</td>
                </tr>

                <tr class="scheduleTab__tr">
                    <td class="scheduleTab__td">Home team</td>
                    <td class="scheduleTab__td">
                        <span>
                            <span>69</span>
                            <span>:</span>
                            <span>89</span>
                        </span>
                    </td>
                    <td>Gues team</td>
                </tr>
                <tr class="scheduleTab__tr">
                    <td colspan="3" class="scheduleTab__td">Wrocław</td>
                </tr>

                <tr class="scheduleTab__tr">
                    <td class="scheduleTab__td">Home team</td>
                    <td class="scheduleTab__td ">
                        <span>
                            <span>69</span>
                            <span>:</span>
                            <span>89</span>
                        </span>
                    </td>
                    <td>Gues team</td>
                </tr>
                <tr class="scheduleTab__tr">
                    <td colspan="3" class="scheduleTab__td">
                        <span>
                            <span>23 December 2022</span>
                            <span>, </span>
                            <span>Wrocław</span>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class scheduleTab extends Vue{
    
}
</script>
<style>
.scheduleTab__table {
    width: 100%;
    font-size: 32px;
}

.scheduleTab__tr:nth-child(4n+1), .scheduleTab__tr:nth-child(4n+2){
    background: var(--orange);
}

.scheduleTab__tr:nth-child(4n-1), .scheduleTab__tr:nth-child(4n){
    background-color: var(--orange-04);

}

.scheduleTab__td {
    padding: 10px 0;
}
.teamTab{
    width: 45%;
}
</style>