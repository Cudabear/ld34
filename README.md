# ld34
A game made in Javascript with Phaser for LD34

# TODO:

ART:
	- Main Character (cat)
		- Idle animation
		- Walk animation
		- Plant animation
		- fall animation
		- Death animation
		- collect seeds animation
	- Enemy (swarm of bees)
	    - Idle animation
	    - Kill animation
	    - Death animation
	- Rising Platform plant
	    - Idle animation UNNECESSARY
	    - Growing animation DONE
	- Burning Plant
		- Idle animation
		- Growing animation
		- Burn animation
	- Thorns
	    - Burned down animation
	- Venus fly trap
	    - idle animation
	    - growing animation
	    - eating animation
	- Hole digger
	    - growing animation
	    - dirt crumble animation
	    - idle animation
	- Bridge builder
	    - growing animation
	    - building animation
	    - idle animation
    - Tileset
        - Fertal planting ground
        - random decoration tiles
    - Background/forground
        - Layered background/forground
    - Butterfly
        - idle animation
        - flutter animation
    - Level select menu
    - Bitmap font

LOGIC:
	- Main Character (cat) 
		- move left/right with arrow keys DONE
		- fall off cliffs DONE
		- die when contact enemy DONE
		- collect seeds by walking over (add to FIFO queue) DONE
		- plant seeds by walking over ground (pop from FIFO queue) DONE
	- Enemy (swarm of bees)
	    - pace across avalible space on platform DONE
	    - kill main character when contact DONE
	    - die when contact venus fly trap
	- Rising Platform plant
	    - when grown, push main character up to configured height DONE (SORT OF)
	- Burning Plant
		- when grown, burn down any connecting thorns
	- Thorn Door
	    - burn down when connecting thorns are burned
	- Venus fly trap
	    - eat enemy when contact
	- Hole digger
	    - destroy fertal ground tile when planted
	- Bridge builder
	    - fill any open space on the left or right of fertal ground tile with solid tile
    - Level loading/switching/selecting
    - End screen with tons of butterflies and main character

SOUND:
	- Background music
		- chill, relaxing
	- Buttefly flutter sound
	- Growing plant sound
	- die sound
	- eating hornet sound
	- collecting seed sound






