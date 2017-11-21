<template>
<div id="app">

              <h3> Formulaire Client : </h3>

  <v-app id="inspire">
    <v-card color="grey lighten-4" flat>
      <v-card-text>
        <v-container fluid>
          <v-layout row>
            <v-flex xs4>
            </v-flex>
            <v-flex xs46>
              <v-text-field
                name="input-10-1"
                label="Enter your Name"
                hint="At least 10 characters"
                min="10"
                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                counter
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4>
            </v-flex>
          </v-layout>


            <v-layout row>
            <v-flex xs46>
            </v-flex>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                name="input-10-1"
                label="Enter your Name Familly"
                hint="At least 10 characters"
                min="10"
                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                counter
              ></v-text-field>
            </v-flex>
          </v-layout>

            <div class="un">
            <v-layout row>
            <v-flex xs46>
            </v-flex>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                type="color"
                label="Selected your Color"
              ></v-text-field>
            </v-flex>
          </v-layout>
          </div>

            <div class="deux">
            <v-layout row>
            <v-flex xs46>
            </v-flex>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                type="color"
                label="Selected your Color"
              ></v-text-field>
            </v-flex>
          </v-layout>
          </div>

            <div class="trois">
            <v-layout row>
            <v-flex xs46>
            </v-flex>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                type="color"
                label="Selected your Color"
              ></v-text-field>
            </v-flex>
          </v-layout>
          </div>





            <v-layout row>
            <v-flex xs46>
            </v-flex>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                name="input-10-2"
                label="Enter your Password"
                hint="At least 12 characters"
                min="12"
                :append-icon="e4 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e4 = !e4)"
                value=""

                :type="e4 ? 'password' : 'text'"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-app>
</div>



</template>

<script>
  export default {
    data () {
      return {
        e1: false,
        e2: false,
        e3: false,
        e4: false,
        password: 'Password'
      }
    }
  }

</script>


<style>

.un {
    margin: 0px 0px 0px 0px;
    }
.deux {
 }

.trois {
 }

</style>
