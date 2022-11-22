<template>
    <section class=" sectionPaddingVertical sectionPaddingLevel">
      <div class="flex">
        <div style="width: 50%">
          <div class="contact">
            <h5>Contact</h5>
            <div>
              (602) 765-0846
            </div>
            <div>
              4925 Collins Ave #10D
            </div>
            <div>
              Miami Beach, Florida(FL), 33140
            </div>
            <div>
              <b>Email: </b>
              <a href="mailto:MyTeamMiami@mia.com">
                MyTeamMiami@mia.com
              </a>
            </div>
            <div>
              <b>Phone: </b>
              <a href="tel:645-345-342">645-345-342</a>
            </div>
          </div>

          <div class="contact">
            <h5>To business</h5>
            <div>
              <b>My Team Miami CEO Robert De Alvares</b>
            </div>
            <div>
              <b>Email: </b>
              <a href="mailto:DeAlvares@myteammiami.com">
                DeAlvares@myteammiami.com
              </a>
            </div>
            <div>
              <b>Phone: </b>
              <a href="tel:721-345-462">721-345-462</a>
            </div>
          </div>

          <div class="contact">
            <h5>For media</h5>
            <div>
              <b>Stefano Chili</b>
            </div>
            <div>
              <b>Email: </b>
              <a href="mailto:Stefano@chili.com">
                Stefano@chili.com
              </a>
            </div>
            <div>
              <b>Phone: </b>
              <a href="tel:421-315-442">421-315-442</a>
            </div>
          </div>
        </div>
        <div style="width: 50%">
          <img src="logo1.png" alt="">
        </div>
      </div>
    </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";


export default class contact extends Vue{


}
</script>

<style>
.contact {
  padding-bottom: 30px;
  font-size: 22px;

}

.contact a:hover {
  text-decoration: underline;
}
</style>