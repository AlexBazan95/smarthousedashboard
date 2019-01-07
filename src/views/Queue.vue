<template>
  <v-container>
	<v-layout text-xs-center wrap>
	  <v-flex xs12>
		<template>
		  <v-layout row>
			<v-flex xs12>
			  <v-card>
				<v-toolbar class="no-bn">
				  <v-icon>queue_music</v-icon>
				  <v-toolbar-title>Queue</v-toolbar-title>
				  <v-spacer></v-spacer>
				  <v-btn icon>
					<v-icon>playlist_add</v-icon>
				  </v-btn>
				</v-toolbar>
				<v-list two-line>
				  <template v-for="(item, index) in items">
					<v-subheader v-if="item.header" :key="item.header">
					  {{ item.header }}
					</v-subheader>
					<v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
					<v-list-tile v-else :key="item.title" avatar @click="" class="bb">

					  <v-list-tile-avatar>
					    <div class="now playing" v-if="item.avatar == 'playing'" id="music">
						  <span class="bar n1"></span>
						  <span class="bar n2"></span>
						  <span class="bar n3"></span>
						  <span class="bar n4"></span>
						  <span class="bar n5"></span>
						  <span class="bar n6"></span>
						</div>
						<div v-else-if="item.avatar == 'play'">
						  <v-btn icon>
							<v-icon>play_arrow</v-icon>
						  </v-btn>
						</div>
					  </v-list-tile-avatar>

					  <v-list-tile-content>
					    <v-list-tile-title v-html="item.title"></v-list-tile-title>
					    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
					  </v-list-tile-content>
					  
					  <v-list-tile-action>
		                <v-btn icon ripple>
		                  <v-icon color="grey lighten-1">info</v-icon>
		                </v-btn>
		              </v-list-tile-action>
					</v-list-tile>
				  </template>
			    </v-list>
			  </v-card>
			</v-flex>
		  </v-layout>
		</template>
	  </v-flex>
	</v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            avatar: 'playing',
            title: 'Brunch this weekend',
            subtitle: "Ali Connors"
          },
          {
            avatar: 'play',
            title: 'Summer BBQ',
            subtitle: "Alex Scott"
          },
          {
            avatar: 'play',
            title: 'Oui oui Song',
            subtitle: "Sandra Adams"
          }
        ]
      }
    }
  }
</script>

<style>
	.bb{
		border-bottom: 1px solid rgba(0,0,0,0.05);
	}
	.playing {
		position: relative;
		top: 5px;
	}
	.now.playing .bar {
		display: inline-block;
		position: relative;
		margin-right: 1px;
		width: 5px;
		height: 0.5px;
		overflow: hidden;
		background: #1976d2;
		color: transparent;
		animation-name: pulse;
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}
	.paused.playing .bar {
		animation-iteration-count: 1;
	}
	.paused.playing:after {
	}
	.n1 {
		animation-delay: 0.5s;
	}
	.n2 {
		animation-delay: 0.2s;
	}
	.n3 {
		animation-delay: 1.2s;
	}
	.n4 {
		animation-delay: 0.9s;
	}
	.n5 {
		animation-delay: 2.3s;
	}
	.n6 {
		animation-delay: 1.3s;
	}
	.n7 {
		animation-delay: 3.1s;
	}
	.n8 {
		animation-delay: 1.9s;
	}
	@keyframes pulse {
		0% {
			height: 1px;
			margin-top: 0;
		}
		10% {
			height: 20px;
			margin-top: -40px;
		}
		50% {
			height: 10px;
			margin-top: -20px;
		}
		60% {
			height: 15px;
			margin-top: -30px;
		}
		80% {
			height: 30px;
			margin-top: -60px;
		}
		100% {
			height: 1px;
			margin-top: 0;
		}
	}
	.no-bn{
		box-shadow:none
	}
</style>