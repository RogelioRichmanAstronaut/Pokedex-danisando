import { reactive } from "vue"

export const store = reactive({
    dataPokemones: [],
    lPokemones: [
        'bulbasaur',
        'oddish',
        'charmander',
        'flareon',
        'wartortle',
        'poliwhirl',
        'ivysaur',
        'charizard',
        'pikachu',
        ],
    coloresTipo: {
        'electric': 'linear-gradient(71.11deg, rgba(255, 194, 30, 0.69) 4.19%, rgba(223, 163, 0, 0.63) 13.03%, #DFA300 57.76%, rgba(223, 163, 0, 0.9) 86.89%, rgba(223, 163, 0, 0.88) 94.41%)',
        'normal' : '#B09398', 
        'fire' : 'linear-gradient(71.11deg, rgba(255, 39, 39, 0.69) 4.19%, rgba(255, 39, 39, 0.72) 13.03%, rgba(255, 39, 39, 0.85) 57.76%, rgba(255, 39, 39, 0.79) 86.89%, rgba(255, 39, 39, 0.88) 94.41%)',
        'water' : 'linear-gradient(71.11deg, rgba(0, 110, 209, 0.52) 4.19%, rgba(0, 110, 209, 0.54) 13.03%, rgba(0, 110, 209, 0.85) 57.76%, rgba(0, 110, 209, 0.79) 86.89%, rgba(0, 110, 209, 0.88) 94.41%)',
        'ice': 'linear-gradient(71.11deg, rgba(64, 224, 208, 0.82) 4.19%, rgba(0, 136, 255, 0.5) 13.11%, rgba(64, 224, 208, 0.98) 86.89%, #40E0D0 94.41%)',
        'rock': 'linear-gradient(71.11deg, rgba(139, 140, 122, 0.69) 4.19%, rgba(139, 140, 122, 0.72) 13.03%, rgba(139, 140, 122, 0.85) 57.76%, rgba(139, 140, 122, 0.79) 86.89%, rgba(139, 140, 122, 0.88) 94.41%)',
        'flying': 'linear-gradient(71.11deg, rgba(51, 60, 70, 0.69) 4.19%, rgba(51, 60, 70, 0.72) 13.03%, rgba(51, 60, 70, 0.85) 57.76%, rgba(51, 60, 70, 0.79) 86.89%, rgba(51, 60, 70, 0.88) 94.41%)',
        'grass': 'transparent linear-gradient(59deg, #48D0B0 0%, #33CBA7 78%, #00BE91 100%) 0% 0% no-repeat padding-box',
        'psychic': 'linear-gradient(71.11deg, rgba(255, 0, 204, 0.69) 4.19%, rgba(255, 0, 204, 0.72) 13.03%, rgba(255, 0, 204, 0.85) 57.76%, rgba(255, 0, 204, 0.79) 86.89%, rgba(255, 0, 204, 0.88) 94.41%)',
        'ghost': 'linear-gradient(71.11deg, rgba(86, 29, 37, 0.69) 4.19%, rgba(86, 29, 37, 0.72) 13.03%, rgba(86, 29, 37, 0.85) 57.76%, rgba(86, 29, 37, 0.79) 86.89%, rgba(86, 29, 37, 0.88) 94.41%)',
        'bug': 'linear-gradient(71.11deg, rgba(42, 156, 43, 0.69) 4.19%, rgba(42, 156, 43, 0.72) 13.03%, rgba(42, 156, 43, 0.85) 57.76%, rgba(42, 156, 43, 0.79) 86.89%, rgba(42, 156, 43, 0.88) 94.41%)',
        'poison': 'linear-gradient(71.11deg, rgba(104, 109, 255, 0.69) 4.19%, rgba(104, 109, 255, 0.72) 13.03%, rgba(104, 109, 255, 0.85) 57.76%, rgba(104, 109, 255, 0.79) 86.89%, rgba(104, 109, 255, 0.88) 94.41%)',
        'ground': 'linear-gradient(71.11deg, rgba(116, 89, 41, 0.69) 4.19%, rgba(116, 89, 41, 0.72) 13.03%, rgba(116, 89, 41, 0.85) 57.76%, rgba(116, 89, 41, 0.79) 86.89%, rgba(116, 89, 41, 0.88) 94.41%)',
        'dragon': 'linear-gradient(71.11deg, rgba(218, 98, 125, 0.69) 4.19%, rgba(218, 98, 125, 0.72) 13.03%, rgba(218, 98, 125, 0.85) 57.76%, rgba(218, 98, 125, 0.79) 86.89%, rgba(218, 98, 125, 0.88) 94.41%)',
        'steel': 'linear-gradient(71.11deg, rgba(29, 138, 153, 0.69) 4.19%, rgba(29, 138, 153, 0.72) 13.03%, rgba(29, 138, 153, 0.85) 57.76%, rgba(29, 138, 153, 0.79) 86.89%, rgba(29, 138, 153, 0.88) 94.41%)',
        'fighting': 'linear-gradient(71.11deg, rgba(47, 47, 47, 0.69) 4.19%, rgba(47, 47, 47, 0.72) 13.03%, rgba(47, 47, 47, 0.85) 57.76%, rgba(47, 47, 47, 0.79) 86.89%, rgba(47, 47, 47, 0.88) 94.41%)',
    },
    //metodos

    //método crear nuevo objeto
    newPokemon(){
      return {
        nombre: '',
        tipos:[],
        id:'',
        desc:'',
        color:'',
        categoria:'',
        altura:'',
        peso:'',
        img:'',
        categoria:'',
        evoName: '',
        evoTipo:[],
        evoIMG:'',
        evoID:'',
        debilidades:[],
        //falta
        habilidad:'',
      }
    },

    //método volver id a 3 cifras
    zeroFill( number, width )
      {
        width -= number.toString().length;
        if ( width > 0 )
        {
          return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
        }
        return number + ""; // siempre devuelve tipo cadena
      },
    //método traducir tipo pokemon a español
    traductor (tipos){
        const EnEsTypes = {
          'electric' : 'Eléctrico',
          'normal' : 'Normal', 
          'fire' : 'Fuego',
          'water' : 'Agua',
          'ice': 'Hielo',
          'rock': 'Roca',
          'flying': 'Volador',
          'grass': 'Planta',
          'psychic': 'Psíquico',
          'ghost': 'Fantasma',
          'bug': 'Insecto',
          'poison': 'Veneno',
          'ground': 'Tierra',
          'dragon': 'Dragon',
          'steel': 'Acero',
          'fighting': 'Luchador'
        }
        var ind = 0
        for(const tipo of tipos){
          tipos[ind] = EnEsTypes[tipo]
          //console.log(tipo)
          ind = ind +1
        }
      },

    //método calcular debilidades
    async obtenerDebilidades(tiposPokemon){
        var doubleDamageFromTotals = []
        const halfDamageFromTotals = []
        //get data
        for( const tipo of tiposPokemon){
          //console.log(tipo.type.url)
          const res = await fetch(`${tipo.type.url}`)
          const data = await res.json()
          for(const damage of data.damage_relations.double_damage_from){
            if(!(doubleDamageFromTotals.includes(damage.name))){
              doubleDamageFromTotals.push(damage.name)
            }
          }
          for(const damage of data.damage_relations.half_damage_from){
            if(!(halfDamageFromTotals.includes(damage.name))){
              halfDamageFromTotals.push(damage.name)
            }
          }
        }
        //formula debilidades (double-half)
        for(const damage of halfDamageFromTotals){
          if(doubleDamageFromTotals.includes(damage)){
            var debilidades = doubleDamageFromTotals.filter(name => name != damage)
            doubleDamageFromTotals = debilidades
          }
        }
        return doubleDamageFromTotals
      },

    //método obtener NOMBRE de evolución
    obtenerEvofindName(chain, name, pokemon){
        if(chain.species.name == name){
          try{
            //console.log(chain.evolves_to[0].species.name)
            pokemon.evoName = chain.evolves_to[0].species.name
          }catch(err){
            //console.log("lastevolution")
            pokemon.evoName = "Last evolution"
          }
        }else{
          for(const evo of chain.evolves_to){
            this.obtenerEvofindName(evo, name, pokemon)
          }
        }
    },

    //método obtener datos evolución
    async obtenerEvolucion(pokemon){
        const name = pokemon.nombre
        try{
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
          const data = await res.json()
  
          const res2 = await fetch(`${data.evolution_chain.url}`)
          const data2 = await res2.json()
          //console.log(data2)
          this.obtenerEvofindName(data2.chain, name, pokemon)
          
          if(pokemon.evoName !="Last evolution"){
            //console.log("buena")
            //obtener especificos datos de pokemon evo
            const evoData = await this.obtenerDatosPokemon(pokemon.evoName)
            for(const tipo of evoData.types){
             pokemon.evoTipo.push(tipo.type.name)
            }
            pokemon.evoIMG = evoData.sprites.other["official-artwork"].front_default
            pokemon.evoID = this.zeroFill(evoData.id,3)
          }else{
            //si ya no tiene mas evoluciones el pokemon
            pokemon.evoID = this.zeroFill(pokemon.id,3)
            pokemon.evoIMG = pokemon.img
            pokemon.evoTipo = [...pokemon.tipos]
          }
        }catch(err){
          console.log(err)
        }
      },

    //método obtener color, desc, tipo
    async obColorDescTipo(pokemon){
      const name = pokemon.nombre
      try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
        const data = await res.json()
        //color
        // pokemon.color = data.color.name
        //desc
        let desc = data.flavor_text_entries.find((desc) => desc.language.name == "es" && desc.version.name == "sword")
        pokemon.desc = desc.flavor_text
        //categoria
        let categoria = data.genera.find((categoria)=> categoria.language.name == "es")
        pokemon.categoria = (categoria.genus.split(" ")[1])
        
      }catch(err){
        console.log(err)
      }
    },

    //método obtener información de pokemon
    async obtenerDatosPokemon(name){
        try{
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
          const data = await res.json()
          return data
        }catch(err){
          console.log(err)
        }
      },
    
    // funcion principal
    async created(){
        for(const poke of this.lPokemones){
          const data = await this.obtenerDatosPokemon(poke)
          const newP = this.newPokemon()
          newP.nombre = data.name
          for(const tipo of data.types){
            newP.tipos.push(tipo.type.name)
          }
          newP.id = data.id
          newP.altura = ((data.height)/10)
          newP.peso = ((data.weight)/10)
          
          //img
          // newP.img = data.sprites.other.dream_world.front_default
          // newP.img = data.sprites.other.home.front_default
          
          newP.img = data.sprites.other["official-artwork"].front_default
          //obtener color desc y tipo de pokemon
          await this.obColorDescTipo(newP)
          //obtener datos de evolucion de pokemon
          await this.obtenerEvolucion(newP)
          //obtener debilidades pokemon
          newP.debilidades = await this.obtenerDebilidades(data.types)
          //traducir resultados de ingles a español
          this.traductor(newP.tipos)
          this.traductor(newP.debilidades)
          this.traductor(newP.evoTipo)
          
          //console.log(newP.tipos)
          //color
          newP.color = this.coloresTipo[data.types[0].type.name]
          newP.id = this.zeroFill(newP.id,3)
          this.dataPokemones.push(newP)
          //console.log(newP)
        }
      }
})
store.created()