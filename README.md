# ld34
A game made in Javascript with Phaser for LD34

# TODO:

ART:
	- Main Character (cat)
		- Idle animation DONE
		- Walk animation DONE
		- fall animation DONE
		- Death animation DONE
	- Enemy (swarm of bees) DONE
	    - Idle animation DONE
	    - Kill animation DONE
	    - Death animation DONE
	- Rising Platform plant
	    - Growing animation DONE
	    - Plant animation
	- Burning Plant
		- Growing animation
		- Burn animation
	- Thorns
	    - Burned down animation
	- Venus fly trap
	    - growing animation
	    - eating animation
	- Hole digger
	    - growing animation
	    - dirt crumble animation
	- Bridge builder
	    - growing animation
	    - building animation
	    - Bridge Tile
    - Tileset
        - Fertile planting ground DONE
        - random decoration tiles DONE
    - Background/forground
        - Layered background/forground DONE
    - Butterfly
        - idle animation DONE
        - flutter animation DONE
    - Level select menu DONE
    - Bitmap font DONE?

LOGIC:
	- Main Character (cat) DONE
		- move left/right with arrow keys DONE
		- fall off cliffs DONE
		- die when contact enemy DONE
		- collect seeds by walking over (add to FIFO queue) DONE
		- plant seeds by walking over ground (pop from FIFO queue) DONE
	- Enemy (swarm of bees) DONE
	    - pace across avalible space on platform DONE
	    - kill main character when contact DONE
	    - die when contact venus fly trap DONE
	- Rising Platform plant DONE
	    - when grown, push main character up to configured height DONE (needs polish)
	- Burning Plant DONE
		- when grown, burn down any connecting thorns DONE (needs polish)
	- Thorn Door DONE
	    - burn down when connecting thorns are burned DONE
	- Venus fly trap DONE
	    - eat enemy when contact DONE
	- Hole digger DONE
	    - destroy fertal ground tile when planted DONE
	- Bridge builder DONE
	    - fill any open space on the left or right of fertal ground tile with solid tile DONE
    - Level loading/switching/selecting DONE
    - End screen with tons of butterflies and main character
    - 9/20 levels designed

SOUND:
	- Background music DONE
		- chill, relaxing
	- Buttefly flutter sound DONE
	- Growing plant sound DONE
	- die sound DONE
	- eating hornet sound DONE
	- collecting seed sound DONE






