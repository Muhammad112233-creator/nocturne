/* NOCTURNE ARCHIVE — content, navigation, interactions and optional generative sound */
(() => {
  "use strict";

  const copy = {
    en: {
      brandSub: "The slow archive — six studies",
      introEyebrow: "— An exhibition in six pauses —",
      introTitle: "Six <em>small signals</em><br />after the noise.",
      introCopy:
        "Enter a room made for looking slowly.<br />Six original studies wait in the low light.<br />Follow the glowing coordinates to unfold their notes.",
      introTip: "Six studies · five illuminated details in every room",
      enter: "Enter the archive",
      soundOn: "Sound ·",
      soundOff: "Sound",
      navigate: "to move through the rooms",
      context: "Work",
      reveal: "Reveal",
      conceal: "Veil",
      prompt: "touch the lit coordinates",
      detail: "Detail",
      about: "About this study",
      observe: "What appears",
      intention: "Why it matters",
      feeling: "The feeling",
      material: "Material",
      dimensions: "Format",
      artist: "Artist",
      study: "Study",
      year: "Year",
      location: "Location",
      series: "Series",
      previous: "Previous",
      next: "Next",
      room: "Room",
      close: "Close notes",
      outroLine: "Take one <em>quiet thing</em><br />with you.",
      outroSub: "— End of the archive —",
      restart: "Begin again",
    },
    fr: {
      brandSub: "L’archive lente — six études",
      introEyebrow: "— Une exposition en six pauses —",
      introTitle: "Six <em>petits signaux</em><br />après le bruit.",
      introCopy:
        "Entrez dans une pièce conçue pour regarder lentement.<br />Six études originales attendent dans la pénombre.<br />Suivez les coordonnées lumineuses pour déplier leurs notes.",
      introTip: "Six études · cinq détails lumineux dans chaque pièce",
      enter: "Entrer dans l’archive",
      soundOn: "Son ·",
      soundOff: "Son",
      navigate: "pour traverser les pièces",
      context: "Étude",
      reveal: "Révéler",
      conceal: "Voiler",
      prompt: "touchez les coordonnées lumineuses",
      detail: "Détail",
      about: "À propos de l’étude",
      observe: "Ce qui apparaît",
      intention: "Pourquoi cela compte",
      feeling: "La sensation",
      material: "Matière",
      dimensions: "Format",
      artist: "Artiste",
      study: "Étude",
      year: "Année",
      location: "Lieu",
      series: "Série",
      previous: "Précédent",
      next: "Suivant",
      room: "Pièce",
      close: "Fermer les notes",
      outroLine: "Emportez une <em>chose calme</em><br />avec vous.",
      outroSub: "— Fin de l’archive —",
      restart: "Recommencer",
    },
  };

  /* Original exhibition content. Replace this one object to turn the project into your own show. */
  const works = [
    {
      file: "ember-archive.jpg",
      kind: {
        en: "Light study · amber resin",
        fr: "Étude de lumière · résine ambrée",
      },
      author: "Mara Venn",
      year: "2026",
      format: { en: "Photographic object", fr: "Objet photographique" },
      place: { en: "West Light Room", fr: "Salle de la lumière ouest" },
      movement: { en: "Material reverie", fr: "Rêverie matérielle" },
      title: { en: "The Ember Archive", fr: "L’archive braise" },
      caption: {
        en: "Mara Venn · The Ember Archive · 2026",
        fr: "Mara Venn · L’archive braise · 2026",
      },
      poem: {
        en: {
          title: "Light<br />as a held breath.",
          one: "A warm fragment waits in its dark case.<br />It remembers the hand that did not touch it.",
          two: "Around it, dust becomes a constellation.<br />Nothing burns. Everything keeps glowing.",
        },
        fr: {
          title: "La lumière<br />comme souffle retenu.",
          one: "Un fragment chaud attend dans sa boîte sombre.<br />Il se souvient de la main qui ne l’a pas touché.",
          two: "Autour de lui, la poussière devient constellation.<br />Rien ne brûle. Tout continue de luire.",
        },
      },
      specs: {
        material: {
          en: "Resin, reflected tungsten light",
          fr: "Résine, lumière tungstène réfléchie",
        },
        dimension: {
          en: "Edition of 8 · 80 × 100 cm",
          fr: "Édition de 8 · 80 × 100 cm",
        },
      },
      context: {
        en: {
          intro:
            "The Ember Archive begins with a contradiction: an object that looks excavated but was made yesterday. Venn photographs warm resin as though it were a relic, letting the camera turn scale and age into open questions.",
          intent:
            "The study asks how care changes our reading of a thing. A case, a beam of light, and a little distance can make even a recent object feel ceremonial.",
          technique:
            "A single continuous exposure is made inside a blackened case. The warm source is moved by hand behind a diffusion screen, then the grain is printed rather than added digitally.",
          feeling:
            "A small, durable warmth — the sense of finding a light someone left on for you.",
        },
        fr: {
          intro:
            "L’archive braise commence par une contradiction : un objet qui semble exhumé mais a été fabriqué hier. Venn photographie une résine chaude comme une relique, laissant l’objectif rendre l’échelle et l’âge incertains.",
          intent:
            "L’étude demande comment le soin transforme la lecture d’une chose. Une vitrine, un faisceau et un peu de distance peuvent donner à un objet récent une gravité cérémonielle.",
          technique:
            "Une pose continue est réalisée dans un caisson noirci. La source chaude est déplacée à la main derrière un diffuseur, puis le grain est imprimé, jamais ajouté numériquement.",
          feeling:
            "Une chaleur modeste et durable — l’impression de trouver une lampe laissée allumée pour vous.",
        },
      },
      hotspots: [
        [
          "The rim",
          "Le bord",
          "A slim arc keeps the object from becoming a symbol. It is simply an edge catching light.",
          "Un arc très fin empêche l’objet de devenir symbole. C’est seulement un bord qui attrape la lumière.",
          "The image starts with restraint.",
          "L’image commence par la retenue.",
          "Precision before nostalgia.",
          "La précision avant la nostalgie.",
          54,
          18,
        ],
        [
          "Warm core",
          "Noyau chaud",
          "The brightest area has no fixed outline. It seems to breathe against the lacquer.",
          "La zone la plus claire n’a pas de contour fixe. Elle semble respirer contre la laque.",
          "Light is treated as material, not decoration.",
          "La lumière est traitée comme matière, non comme décor.",
          "A tender alertness.",
          "Une vigilance tendre.",
          51,
          47,
        ],
        [
          "Hairline crack",
          "Fissure capillaire",
          "A deliberate fault interrupts the polished surface.",
          "Une faille volontaire interrompt la surface polie.",
          "Perfection would make the object closed; the crack gives it a future.",
          "La perfection fermerait l’objet ; la fissure lui donne un avenir.",
          "Permission to be unfinished.",
          "La permission de rester inachevé.",
          37,
          59,
        ],
        [
          "Case shadow",
          "Ombre de la boîte",
          "The shadow is not empty. It frames the little climate surrounding the resin.",
          "L’ombre n’est pas vide. Elle cadre le petit climat autour de la résine.",
          "Darkness is part of the display, not its absence.",
          "L’obscurité fait partie de l’exposition, elle n’en est pas l’absence.",
          "Protected curiosity.",
          "Une curiosité protégée.",
          71,
          72,
        ],
        [
          "Floating dust",
          "Poussière flottante",
          "Tiny particles turn the studio air into a visible measure of time.",
          "De minuscules particules font de l’air du studio une mesure visible du temps.",
          "The work makes the unnoticed feel archival.",
          "L’œuvre donne une qualité d’archive à ce qui passe inaperçu.",
          "Time slowing down.",
          "Le temps qui ralentit.",
          25,
          33,
        ],
      ],
      quote: {
        en: "“Attention is the first form of keeping.” — Mara Venn",
        fr: "« L’attention est la première façon de garder. » — Mara Venn",
      },
    },
    {
      file: "tide-index.jpg",
      kind: { en: "Paper study · blue fold", fr: "Étude de papier · pli bleu" },
      author: "Elior Sato",
      year: "2026",
      format: { en: "Paper and pigment", fr: "Papier et pigment" },
      place: { en: "North Table", fr: "Table nord" },
      movement: { en: "Quiet geometry", fr: "Géométrie calme" },
      title: { en: "Index of the Tide", fr: "Index de la marée" },
      caption: {
        en: "Elior Sato · Index of the Tide · 2026",
        fr: "Elior Sato · Index de la marée · 2026",
      },
      poem: {
        en: {
          title: "Blue<br />learning to bend.",
          one: "A sheet turns once, then twice.<br />It begins to resemble a wave without moving.",
          two: "The room remains completely still.<br />Only the eye travels through the fold.",
        },
        fr: {
          title: "Le bleu<br />apprend à plier.",
          one: "Une feuille tourne une fois, puis deux.<br />Elle ressemble à une vague sans bouger.",
          two: "La pièce demeure absolument immobile.<br />Seul l’œil traverse le pli.",
        },
      },
      specs: {
        material: {
          en: "Dyed kozo paper, graphite",
          fr: "Papier kozo teint, graphite",
        },
        dimension: { en: "112 × 84 cm", fr: "112 × 84 cm" },
      },
      context: {
        en: {
          intro:
            "Sato keeps a daily tide notebook, but this image records neither a coast nor a weather event. It is an index of imagined water: a folded page given the weight of a horizon.",
          intent:
            "The artist uses a fragile material to slow down the language of spectacle. A wave here is not an event; it is a question about direction, repetition, and touch.",
          technique:
            "Hand-dyed kozo paper is folded while still damp, dried under a narrow weight, and photographed beside a single cool reflector. Each crease is allowed to cast its own map.",
          feeling:
            "Calm momentum — the sensation of being carried while standing still.",
        },
        fr: {
          intro:
            "Sato tient un carnet des marées quotidien, mais cette image n’enregistre ni côte ni météo. C’est l’index d’une eau imaginée : une page pliée à qui l’on donne le poids d’un horizon.",
          intent:
            "L’artiste emploie une matière fragile pour ralentir le langage du spectaculaire. Ici, une vague n’est pas un événement : elle questionne la direction, la répétition et le toucher.",
          technique:
            "Un papier kozo teint à la main est plié encore humide, séché sous un poids étroit, puis photographié près d’un seul réflecteur froid. Chaque pli projette sa propre carte.",
          feeling:
            "Un élan calme — la sensation d’être porté tout en restant immobile.",
        },
      },
      hotspots: [
        [
          "First crest",
          "Première crête",
          "The top fold catches a pale, almost metallic blue.",
          "Le pli supérieur attrape un bleu pâle, presque métallique.",
          "The highest point is deliberately quiet.",
          "Le point le plus haut est délibérément calme.",
          "Anticipation without urgency.",
          "L’attente sans urgence.",
          49,
          20,
        ],
        [
          "Dark seam",
          "Couture sombre",
          "The shadow turns a paper edge into a line of depth.",
          "L’ombre transforme un bord de papier en ligne de profondeur.",
          "A flat sheet becomes a place to enter.",
          "Une feuille plane devient un lieu où entrer.",
          "A pleasing uncertainty.",
          "Une agréable incertitude.",
          56,
          42,
        ],
        [
          "Graphite mark",
          "Trace de graphite",
          "A nearly erased pencil line confirms the human scale of the gesture.",
          "Une ligne de crayon presque effacée confirme l’échelle humaine du geste.",
          "The visible decision prevents the image from becoming too smooth.",
          "La décision visible évite que l’image devienne trop lisse.",
          "The nearness of a hand.",
          "La proximité d’une main.",
          32,
          62,
        ],
        [
          "Open field",
          "Champ ouvert",
          "The empty grey around the fold is given as much room as the blue itself.",
          "Le gris vide autour du pli reçoit autant d’espace que le bleu lui-même.",
          "Silence is one of the materials.",
          "Le silence est une des matières.",
          "Space to think.",
          "De l’espace pour penser.",
          72,
          66,
        ],
        [
          "Lower turn",
          "Tour inférieur",
          "The final curve lets the object suggest a horizon.",
          "La courbe finale laisse l’objet suggérer un horizon.",
          "The work ends by pointing outward.",
          "L’œuvre se termine en indiquant le dehors.",
          "A gentle departure.",
          "Un départ doux.",
          45,
          82,
        ],
      ],
      quote: {
        en: "“A fold remembers both sides of a surface.” — Elior Sato",
        fr: "« Un pli se souvient des deux côtés d’une surface. » — Elior Sato",
      },
    },
    {
      file: "orbit-room.jpg",
      kind: {
        en: "Sculpture study · bronze",
        fr: "Étude sculpturale · bronze",
      },
      author: "Anika Rowe",
      year: "2026",
      format: { en: "Bronze and shadow", fr: "Bronze et ombre" },
      place: { en: "South Wall", fr: "Mur sud" },
      movement: { en: "Domestic astronomy", fr: "Astronomie domestique" },
      title: { en: "Room for an Orbit", fr: "Une pièce pour une orbite" },
      caption: {
        en: "Anika Rowe · Room for an Orbit · 2026",
        fr: "Anika Rowe · Une pièce pour une orbite · 2026",
      },
      poem: {
        en: {
          title: "A circle<br />holds the afternoon.",
          one: "Bronze leans into a narrow beam.<br />Its shadow completes what metal began.",
          two: "For a minute, the room has two suns:<br />one solid, one only a thought.",
        },
        fr: {
          title: "Un cercle<br />retient l’après-midi.",
          one: "Le bronze se penche vers un rayon étroit.<br />Son ombre achève ce que le métal commence.",
          two: "Pendant une minute, la pièce a deux soleils :<br />l’un solide, l’autre seulement pensé.",
        },
      },
      specs: {
        material: {
          en: "Patinated bronze, daylight",
          fr: "Bronze patiné, lumière du jour",
        },
        dimension: { en: "Diameter 58 cm", fr: "Diamètre 58 cm" },
      },
      context: {
        en: {
          intro:
            "Rowe’s circular form is cast from a hand-cut wax ring. Instead of displaying it at eye level, she lets it sit lower, where a visitor has to notice the wall, floor, and their own position.",
          intent:
            "The work gives equal attention to object and projection. It proposes that a sculpture is never only what can be touched; its temporary shadow is a second, changing body.",
          technique:
            "The bronze was patinated in layers of smoke grey and umber. The photograph was made during a ten-minute window when late light passed through a high studio aperture.",
          feeling:
            "A grounded wonder — something astronomical reduced to the scale of a room.",
        },
        fr: {
          intro:
            "La forme circulaire de Rowe est coulée depuis un anneau de cire taillé à la main. Au lieu de l’exposer au niveau des yeux, elle la place plus bas, obligeant le visiteur à remarquer le mur, le sol et sa propre position.",
          intent:
            "L’œuvre accorde une attention égale à l’objet et à sa projection. Elle propose qu’une sculpture n’est jamais seulement ce qu’on peut toucher ; son ombre provisoire est un deuxième corps, changeant.",
          technique:
            "Le bronze a reçu des patines en couches de gris fumé et d’ombre. La photographie a été faite pendant une fenêtre de dix minutes, lorsque la lumière tardive traversait une ouverture haute de l’atelier.",
          feeling:
            "Un émerveillement ancré — quelque chose d’astronomique ramené à l’échelle d’une pièce.",
        },
      },
      hotspots: [
        [
          "Inner edge",
          "Bord intérieur",
          "The interior is cooler than the face of the bronze.",
          "L’intérieur est plus froid que la face du bronze.",
          "The ring is a boundary, not a solid disk.",
          "L’anneau est une frontière, pas un disque plein.",
          "A clear opening.",
          "Une ouverture nette.",
          49,
          34,
        ],
        [
          "Patina cloud",
          "Nuage de patine",
          "Uneven colour records the handwork left under the final surface.",
          "Une couleur irrégulière enregistre le travail de la main sous la surface finale.",
          "Variation keeps the cast from impersonating a machine.",
          "La variation empêche le moulage d’imiter une machine.",
          "Tactile patience.",
          "Une patience tactile.",
          62,
          50,
        ],
        [
          "Eclipse line",
          "Ligne d’éclipse",
          "A narrow shadow sits exactly where the room and the object meet.",
          "Une ombre étroite repose exactement là où la pièce et l’objet se rencontrent.",
          "The composition depends on this accident of light.",
          "La composition dépend de cet accident de lumière.",
          "A small revelation.",
          "Une petite révélation.",
          71,
          62,
        ],
        [
          "Wall grain",
          "Grain du mur",
          "The wall’s soft texture makes the shadow feel almost touchable.",
          "La texture douce du mur rend l’ombre presque touchable.",
          "Background becomes a quiet collaborator.",
          "L’arrière-plan devient un collaborateur discret.",
          "A sense of closeness.",
          "Un sentiment de proximité.",
          31,
          57,
        ],
        [
          "Floor glow",
          "Lueur du sol",
          "A reflected warmth returns the bronze to the ground.",
          "Une chaleur réfléchie ramène le bronze au sol.",
          "The orbit does not float away; it belongs here.",
          "L’orbite ne s’éloigne pas ; elle appartient ici.",
          "Steadiness.",
          "De la stabilité.",
          48,
          80,
        ],
      ],
      quote: {
        en: "“A shadow is a sculpture practising disappearance.” — Anika Rowe",
        fr: "« Une ombre est une sculpture qui s’exerce à disparaître. » — Anika Rowe",
      },
    },
    {
      file: "salt-garden.jpg",
      kind: {
        en: "Still life · salt and stem",
        fr: "Nature morte · sel et tige",
      },
      author: "Nora Bell",
      year: "2026",
      format: { en: "Botanical arrangement", fr: "Arrangement botanique" },
      place: { en: "Velvet Cabinet", fr: "Cabinet de velours" },
      movement: { en: "Tender inventory", fr: "Inventaire tendre" },
      title: { en: "Salt Garden, Closed", fr: "Jardin de sel, fermé" },
      caption: {
        en: "Nora Bell · Salt Garden, Closed · 2026",
        fr: "Nora Bell · Jardin de sel, fermé · 2026",
      },
      poem: {
        en: {
          title: "A garden<br />without weather.",
          one: "Dry stems wait on the black cloth.<br />Salt takes the role of morning.",
          two: "Nothing has opened. Nothing asks to.<br />Still, the whole arrangement leans toward light.",
        },
        fr: {
          title: "Un jardin<br />sans météo.",
          one: "Des tiges sèches attendent sur le tissu noir.<br />Le sel joue le rôle du matin.",
          two: "Rien ne s’est ouvert. Rien ne le demande.<br />Pourtant, toute la composition penche vers la lumière.",
        },
      },
      specs: {
        material: {
          en: "Dried stems, sea salt, velvet",
          fr: "Tiges séchées, sel marin, velours",
        },
        dimension: {
          en: "Pigment print · 60 × 75 cm",
          fr: "Tirage pigmentaire · 60 × 75 cm",
        },
      },
      context: {
        en: {
          intro:
            "Bell builds her still lifes from materials that suggest gardens but deny growth. Here, the blossoms have already passed and the ground is a field of crystals.",
          intent:
            "The arrangement refuses the usual drama of a flower image. It asks whether care can be visible even when the thing being cared for is no longer alive.",
          technique:
            "The salt is sifted directly onto matte velvet and lit from one low side. No stem is retouched; every bend and bruise is part of the image.",
          feeling:
            "A private kind of tenderness, precise enough to survive winter.",
        },
        fr: {
          intro:
            "Bell construit ses natures mortes à partir de matières qui suggèrent des jardins mais refusent la croissance. Ici, les fleurs sont déjà passées et le sol est un champ de cristaux.",
          intent:
            "La composition refuse le drame habituel de l’image florale. Elle demande si le soin peut être visible même lorsque ce dont on s’occupe n’est plus vivant.",
          technique:
            "Le sel est tamisé directement sur un velours mat et éclairé par un seul côté bas. Aucune tige n’est retouchée ; chaque courbe et chaque meurtrissure fait partie de l’image.",
          feeling:
            "Une tendresse privée, assez précise pour survivre à l’hiver.",
        },
      },
      hotspots: [
        [
          "Salt constellation",
          "Constellation de sel",
          "The crystals are scattered unevenly, like a sky lowered to the table.",
          "Les cristaux sont dispersés de façon inégale, comme un ciel abaissé vers la table.",
          "The ground is made active without becoming busy.",
          "Le sol devient actif sans devenir agité.",
          "A small field of possibility.",
          "Un petit champ de possibilités.",
          39,
          70,
        ],
        [
          "Bent stem",
          "Tige pliée",
          "The stem keeps the memory of a former vertical life.",
          "La tige garde le souvenir d’une ancienne vie verticale.",
          "Its bend gives the composition its human scale.",
          "Sa courbe donne à la composition son échelle humaine.",
          "Quiet resilience.",
          "Une résilience calme.",
          51,
          42,
        ],
        [
          "Seed head",
          "Tête de graine",
          "A delicate dry head catches more light than a fresh flower might.",
          "Une tête sèche délicate attrape plus de lumière qu’une fleur fraîche ne le ferait.",
          "The work makes aging visually generous.",
          "L’œuvre rend le vieillissement visuellement généreux.",
          "Respect.",
          "Du respect.",
          62,
          26,
        ],
        [
          "Velvet fold",
          "Pli du velours",
          "The fabric’s dark fold holds an invisible current.",
          "Le pli sombre du tissu retient un courant invisible.",
          "A simple backdrop becomes landscape.",
          "Un simple fond devient paysage.",
          "Depth without distance.",
          "De la profondeur sans distance.",
          25,
          53,
        ],
        [
          "Single petal",
          "Pétale unique",
          "One pale fragment resists the general dryness.",
          "Un fragment pâle résiste à la sécheresse générale.",
          "A single soft note prevents the still life from closing down.",
          "Une seule note douce empêche la nature morte de se fermer.",
          "A flicker of mercy.",
          "Une lueur de grâce.",
          76,
          61,
        ],
      ],
      quote: {
        en: "“Care has a texture, even after bloom.” — Nora Bell",
        fr: "« Le soin a une texture, même après la floraison. » — Nora Bell",
      },
    },
    {
      file: "blue-hour.jpg",
      kind: {
        en: "Landscape study · blue hour",
        fr: "Étude de paysage · heure bleue",
      },
      author: "Ishan Vale",
      year: "2026",
      format: {
        en: "Long exposure photograph",
        fr: "Photographie à pose longue",
      },
      place: { en: "Listening Field", fr: "Champ d’écoute" },
      movement: { en: "Near silence", fr: "Proche silence" },
      title: { en: "Blue Hour, Kept", fr: "Heure bleue, gardée" },
      caption: {
        en: "Ishan Vale · Blue Hour, Kept · 2026",
        fr: "Ishan Vale · Heure bleue, gardée · 2026",
      },
      poem: {
        en: {
          title: "The lake<br />keeps the sky.",
          one: "A distant ridge forgets its own name.<br />Water gives it back as a darker line.",
          two: "One lamp asks almost nothing.<br />The evening answers by staying.",
        },
        fr: {
          title: "Le lac<br />garde le ciel.",
          one: "Une crête lointaine oublie son propre nom.<br />L’eau le rend comme une ligne plus sombre.",
          two: "Une lampe demande presque rien.<br />Le soir répond en restant.",
        },
      },
      specs: {
        material: {
          en: "Archival inkjet on cotton rag",
          fr: "Jet d’encre d’archive sur coton",
        },
        dimension: { en: "90 × 120 cm", fr: "90 × 120 cm" },
      },
      context: {
        en: {
          intro:
            "Vale photographs the short interval after sunset when forms become hard to distinguish but have not disappeared. This lake was visited for several evenings before the small lamp came into alignment with its reflection.",
          intent:
            "The image removes landmarks rather than adding them. It suggests that orientation can emerge from one modest point of warmth, especially when everything else has become blue.",
          technique:
            "A fixed tripod and a long exposure soften the surface of the lake. The final print preserves the low digital noise instead of erasing it, allowing the dark to remain textured.",
          feeling:
            "The relief of being somewhere without needing to name the place.",
        },
        fr: {
          intro:
            "Vale photographie le court intervalle après le coucher du soleil lorsque les formes deviennent difficiles à distinguer sans encore disparaître. Ce lac a été visité plusieurs soirs avant que la petite lampe ne s’aligne avec son reflet.",
          intent:
            "L’image retire les repères au lieu d’en ajouter. Elle suggère qu’une orientation peut naître d’un seul point de chaleur modeste, surtout lorsque tout le reste est devenu bleu.",
          technique:
            "Un trépied fixe et une pose longue adoucissent la surface du lac. Le tirage final conserve le faible bruit numérique au lieu de l’effacer, permettant à l’obscurité de garder sa texture.",
          feeling:
            "Le soulagement d’être quelque part sans devoir donner un nom au lieu.",
        },
      },
      hotspots: [
        [
          "Small lamp",
          "Petite lampe",
          "A warm pixel-sized light changes the scale of the entire valley.",
          "Une lumière chaude, presque de la taille d’un pixel, change l’échelle de toute la vallée.",
          "The lamp is small enough to be believable.",
          "La lampe est assez petite pour être crédible.",
          "Company without interruption.",
          "Une présence sans interruption.",
          58,
          58,
        ],
        [
          "Reflection",
          "Reflet",
          "The light repeats softly in the water, never quite as a mirror.",
          "La lumière se répète doucement dans l’eau, jamais exactement comme un miroir.",
          "The second point makes time feel longer.",
          "Le second point donne au temps l’air plus long.",
          "A held echo.",
          "Un écho retenu.",
          58,
          73,
        ],
        [
          "Low ridge",
          "Crête basse",
          "The horizon is almost lost, but it still gives the blue a direction.",
          "L’horizon est presque perdu, mais il donne toujours une direction au bleu.",
          "A landscape can be constructed from very little evidence.",
          "Un paysage peut se construire avec très peu de preuves.",
          "Trusting the dark.",
          "Faire confiance au noir.",
          49,
          39,
        ],
        [
          "Mist seam",
          "Couture de brume",
          "A cool haze separates water from air for one brief interval.",
          "Une brume froide sépare l’eau de l’air pendant un bref instant.",
          "The work rests in that boundary.",
          "L’œuvre repose dans cette frontière.",
          "Suspension.",
          "La suspension.",
          29,
          60,
        ],
        [
          "Black foreground",
          "Premier plan noir",
          "The near bank disappears completely and lets the viewer enter by imagination.",
          "La rive proche disparaît complètement et laisse le regard entrer par l’imagination.",
          "Absence makes a place for the observer.",
          "L’absence fait une place à l’observateur.",
          "A safe unknown.",
          "Un inconnu sûr.",
          78,
          83,
        ],
      ],
      quote: {
        en: "“Dusk does not erase a place; it asks for a different map.” — Ishan Vale",
        fr: "« Le crépuscule n’efface pas un lieu ; il demande une autre carte. » — Ishan Vale",
      },
    },
    {
      file: "after-rain.jpg",
      kind: {
        en: "Light study · rain glass",
        fr: "Étude de lumière · verre de pluie",
      },
      author: "Celia Mora",
      year: "2026",
      format: { en: "Colour photograph", fr: "Photographie couleur" },
      place: { en: "Last Window", fr: "Dernière fenêtre" },
      movement: { en: "Weather note", fr: "Note météo" },
      title: { en: "After Rain, a Lamp", fr: "Après la pluie, une lampe" },
      caption: {
        en: "Celia Mora · After Rain, a Lamp · 2026",
        fr: "Celia Mora · Après la pluie, une lampe · 2026",
      },
      poem: {
        en: {
          title: "Rain<br />makes a lens of the room.",
          one: "Every drop holds a crooked version<br />of the lamp that waits behind the glass.",
          two: "Outside, the weather has gone somewhere else.<br />Inside, its soft evidence remains.",
        },
        fr: {
          title: "La pluie<br />fait une lentille de la pièce.",
          one: "Chaque goutte retient une version tordue<br />de la lampe qui attend derrière le verre.",
          two: "Dehors, le temps est allé ailleurs.<br />Dedans, sa preuve douce demeure.",
        },
      },
      specs: {
        material: {
          en: "C-type print on baryta paper",
          fr: "Tirage C sur papier baryté",
        },
        dimension: { en: "72 × 96 cm", fr: "72 × 96 cm" },
      },
      context: {
        en: {
          intro:
            "Mora waited until rain had stopped but the pane had not yet dried. The lamp beyond the window turns every droplet into a small imperfect lens, multiplying a domestic scene into dozens of brief versions.",
          intent:
            "The study is about aftermath: not the drama of weather, but the tender evidence it leaves on ordinary surfaces. It privileges what stays when the event has already gone.",
          technique:
            "The image is made without flash at the edge of evening. Focus is held on the nearest droplets while the lamp is allowed to open into a warm blur.",
          feeling: "A familiar room made strange enough to notice again.",
        },
        fr: {
          intro:
            "Mora a attendu que la pluie s’arrête, mais que la vitre ne soit pas encore sèche. La lampe derrière la fenêtre transforme chaque goutte en petite lentille imparfaite, multipliant une scène domestique en dizaines de versions brèves.",
          intent:
            "L’étude parle de l’après : non du drame de la météo, mais de la preuve tendre qu’elle laisse sur les surfaces ordinaires. Elle privilégie ce qui demeure lorsque l’événement est déjà parti.",
          technique:
            "L’image est réalisée sans flash, à la lisière du soir. La mise au point reste sur les gouttes les plus proches tandis que la lampe s’ouvre dans un flou chaud.",
          feeling:
            "Une pièce familière rendue assez étrange pour être remarquée à nouveau.",
        },
      },
      hotspots: [
        [
          "Bright droplet",
          "Goutte brillante",
          "One droplet contains a complete, upside-down lamp.",
          "Une goutte contient une lampe complète, inversée.",
          "A small lens makes the whole room portable.",
          "Une petite lentille rend toute la pièce portable.",
          "Delight.",
          "L’émerveillement.",
          50,
          37,
        ],
        [
          "Blurred lamp",
          "Lampe floue",
          "The lamp stays deliberately unresolved behind the glass.",
          "La lampe reste délibérément indécise derrière le verre.",
          "Warmth works best here as a suggestion.",
          "Ici, la chaleur fonctionne mieux comme suggestion.",
          "Shelter.",
          "Un abri.",
          54,
          59,
        ],
        [
          "Rain track",
          "Traînée de pluie",
          "A longer drop records a path rather than a perfect circle.",
          "Une goutte plus longue enregistre un chemin plutôt qu’un cercle parfait.",
          "The passing weather becomes handwriting.",
          "Le temps qui passe devient écriture.",
          "A fleeting message.",
          "Un message fugitif.",
          34,
          51,
        ],
        [
          "Dark pane",
          "Vitre sombre",
          "The unlit glass gives every reflection room to appear.",
          "Le verre non éclairé donne à chaque reflet l’espace d’apparaître.",
          "Darkness creates legibility.",
          "L’obscurité crée de la lisibilité.",
          "Rest.",
          "Du repos.",
          73,
          27,
        ],
        [
          "Soft edge",
          "Bord doux",
          "The photograph ends before the room can be fully identified.",
          "La photographie se termine avant que la pièce puisse être pleinement identifiée.",
          "Privacy is part of its composition.",
          "L’intimité fait partie de sa composition.",
          "A welcome reserve.",
          "Une réserve bienvenue.",
          24,
          79,
        ],
      ],
      quote: {
        en: "“The weather leaves its notes in ordinary rooms.” — Celia Mora",
        fr: "« Le temps laisse ses notes dans les pièces ordinaires. » — Celia Mora",
      },
    },
  ];

  let lang = localStorage.getItem("nocturne-language") || "en";
  let current = 0;
  let changing = false;
  let panelState = null;
  let pointerX = innerWidth / 2,
    pointerY = innerHeight / 2;
  let cursorX = pointerX,
    cursorY = pointerY,
    auraX = pointerX,
    auraY = pointerY;
  const t = (key) => copy[lang][key] || copy.en[key] || key;
  const local = (value) =>
    typeof value === "object" ? value[lang] || value.en : value;
  const roman = (n) => ["", "I", "II", "III", "IV", "V", "VI"][n] || "";
  const isFinePointer = matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;

  const workHost = document.querySelector("#work-scenes");
  const stage = document.querySelector("#stage");
  const panel = document.querySelector("#side-panel");
  const backdrop = document.querySelector("#panel-backdrop");
  const panelContent = document.querySelector("#panel-content");
  const panelCount = document.querySelector("#panel-count");
  const cursor = document.querySelector(".cursor");
  const aura = document.querySelector(".cursor-aura");
  const progressBar = document.querySelector("#progress-bar");
  const sceneFlash = document.querySelector("#scene-flash");
  const sceneCard = document.querySelector("#scene-card");

  function clean(value) {
    return String(value).replace(
      /[&<>'"]/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#039;",
          '"': "&quot;",
        })[c],
    );
  }

  function workMarkup(work, index) {
    const poem = work.poem[lang] || work.poem.en;
    return `<section class="scene work-scene" data-scene="${index + 1}" aria-label="${clean(local(work.title))}">
      <div class="work-number" aria-hidden="true">${roman(index + 1)}</div>
      <aside class="work-meta">
        <span class="meta-type">${clean(local(work.kind))}</span>
        <span class="meta-label">${t("artist")}</span><span class="meta-value">${clean(work.author)}</span>
        <span class="meta-label">${t("study")}</span><span class="meta-value">${clean(local(work.title))}</span>
        <span class="meta-label">${t("year")}</span><span class="meta-value">${clean(work.year)}</span>
        <span class="meta-label">${t("location")}</span><span class="meta-value">${clean(local(work.place))}</span>
        <span class="meta-label">${t("series")}</span><span class="meta-value">${clean(local(work.movement))}</span>
      </aside>
      <div class="work-frame">
        <div class="art-canvas" data-work="${index}">
          <img class="art-image" src="assets/${clean(work.file)}" alt="${clean(local(work.title))} by ${clean(work.author)}" draggable="false" />
          <div class="art-shade"></div><div class="art-glow"></div>
          <div class="art-prompt">${t("prompt")}</div>
          <div class="canvas-tools">
            <button class="canvas-button" type="button" data-action="context" aria-label="${t("context")}"><span class="symbol">i</span>&nbsp; ${t("context")}</button>
            <button class="canvas-button" type="button" data-action="reveal" aria-label="${t("reveal")}">${t("reveal")}</button>
          </div>
          ${work.hotspots.map((spot, spotIndex) => `<button class="hotspot" type="button" data-hotspot="${spotIndex}" style="--hx:${spot[8]}%;--hy:${spot[9]}%" aria-label="${clean(spot[lang === "fr" ? 1 : 0])}"></button>`).join("")}
        </div>
        <p class="art-caption">${clean(local(work.caption))}</p>
      </div>
      <article class="work-poem">
        <h2>${poem.title}</h2><p>${poem.one}</p><p>${poem.two}</p><span class="signature">— ${t("room")} ${roman(index + 1)}</span>
      </article>
    </section>`;
  }

  function renderWorks() {
    workHost.innerHTML = works.map(workMarkup).join("");
  }

  function translateStatic() {
    document.documentElement.lang = lang;
    document.title = "Nocturne Archive — Digital Exhibition";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document
      .querySelectorAll(".language")
      .forEach((btn) =>
        btn.classList.toggle("is-active", btn.dataset.lang === lang),
      );
    document
      .querySelector("#close-panel")
      .setAttribute("aria-label", t("close"));
    document
      .querySelector("#previous")
      .setAttribute("aria-label", t("previous"));
    document.querySelector("#next").setAttribute("aria-label", t("next"));
    document.querySelector("#sound-label").textContent = soundOn
      ? t("soundOn")
      : t("soundOff");
  }

  function getScenes() {
    return [...document.querySelectorAll(".scene")];
  }
  function activeWorkCanvas() {
    return document.querySelector(
      `.scene[data-scene="${current}"] .art-canvas`,
    );
  }

  function buildProgress() {
    const host = document.querySelector("#progress");
    host.innerHTML = works
      .map(
        (work, index) =>
          `<button type="button" data-go="${index + 1}" aria-label="${t("room")} ${index + 1}: ${clean(local(work.title))}"></button>`,
      )
      .join("");
  }

  function updateUI() {
    document
      .querySelectorAll("#progress button")
      .forEach((dot, i) =>
        dot.classList.toggle("is-active", current === i + 1),
      );
    progressBar.style.height = `${Math.max(5, ((current + 0.2) / 7.2) * 100)}%`;
    const prev = document.querySelector("#previous");
    const next = document.querySelector("#next");
    prev.disabled = current <= 0;
    next.disabled = current >= 7;
  }

  function playTransitionTone() {
    if (!soundOn || !audioCtx) return;
    [0, 0.1, 0.2].forEach((time, i) =>
      chime([261.63, 329.63, 392][i], time, 0.22),
    );
  }

  function showSceneCard(index) {
    if (index < 1 || index > works.length) return;
    const work = works[index - 1];
    sceneCard.innerHTML = `<b>${roman(index)}</b><span></span><i>${clean(work.author)} · ${clean(local(work.title))}</i>`;
    sceneCard.classList.add("is-visible");
    setTimeout(() => sceneCard.classList.remove("is-visible"), 1750);
  }

  function closePanel({ quiet = false } = {}) {
    if (!panelState) return;
    document.querySelectorAll(".art-canvas").forEach((canvas) => {
      canvas.classList.remove("is-zoomed");
      canvas
        .querySelectorAll(".hotspot.is-active")
        .forEach((h) => h.classList.remove("is-active"));
    });
    document
      .querySelectorAll(".work-scene.is-detail")
      .forEach((scene) => scene.classList.remove("is-detail"));
    panel.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    panelState = null;
    if (!quiet) softClick();
  }

  function setPanelFooter(mode, index, detailIndex) {
    const previous = document.querySelector("#panel-prev");
    const next = document.querySelector("#panel-next");
    const showDetailNav = mode === "detail";
    previous.style.display = showDetailNav ? "" : "none";
    next.style.display = showDetailNav ? "" : "none";
    if (showDetailNav) {
      previous.disabled = detailIndex === 0;
      next.disabled = detailIndex === works[index].hotspots.length - 1;
    }
  }

  function openPanel() {
    panel.classList.add("is-open");
    backdrop.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    panel.scrollTop = 0;
  }

  function panelIntroAnimation() {
    [
      ...panelContent.querySelectorAll(
        ".panel-eyebrow,.panel-title,.panel-author,.panel-section,.panel-specs",
      ),
    ].forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(13px)";
      item.style.transition = "opacity .48s ease, transform .48s ease";
      setTimeout(
        () => {
          item.style.opacity = "1";
          item.style.transform = "none";
        },
        90 + i * 65,
      );
    });
  }

  function openContext(index) {
    const work = works[index];
    closePanel({ quiet: true });
    panelState = { mode: "context", work: index };
    const ctx = work.context[lang] || work.context.en;
    panelContent.innerHTML = `<p class="panel-eyebrow">${t("about")}<span>${roman(index + 1)}</span></p>
      <h2 class="panel-title">${clean(local(work.title))}</h2>
      <p class="panel-author">${clean(work.author)} · ${clean(work.year)}</p>
      <div class="panel-specs"><div>${t("material")}<strong>${clean(local(work.specs.material))}</strong></div><div>${t("dimensions")}<strong>${clean(local(work.specs.dimension))}</strong></div></div>
      <section class="panel-section"><h3>${t("about")}</h3><p>${clean(ctx.intro)}</p></section>
      <section class="panel-section"><h3>${t("intention")}</h3><p>${clean(ctx.intent)}</p></section>
      <section class="panel-section"><h3>${t("material")}</h3><p>${clean(ctx.technique)}</p></section>
      <section class="panel-section panel-quote"><h3>${t("feeling")}</h3><p>${clean(ctx.feeling)}</p></section>`;
    panelCount.textContent = `${t("room")} ${roman(index + 1)}`;
    setPanelFooter("context", index);
    openPanel();
    panelIntroAnimation();
    softClick();
  }

  function openDetail(index, detailIndex) {
    const work = works[index];
    const spot = work.hotspots[detailIndex];
    closePanel({ quiet: true });
    panelState = { mode: "detail", work: index, detail: detailIndex };
    const canvas = document.querySelector(`.art-canvas[data-work="${index}"]`);
    if (canvas) {
      canvas
        .querySelectorAll(".hotspot")
        .forEach((item) => item.classList.remove("is-active"));
      canvas
        .querySelector(`[data-hotspot="${detailIndex}"]`)
        ?.classList.add("is-active");
      canvas.style.setProperty("--focus-x", `${spot[8]}%`);
      canvas.style.setProperty("--focus-y", `${spot[9]}%`);
      canvas.classList.add("is-zoomed");
      canvas.closest(".work-scene").classList.add("is-detail");
    }
    panelContent.innerHTML = `<p class="panel-eyebrow">${t("detail")}<span>${String(detailIndex + 1).padStart(2, "0")} / ${String(work.hotspots.length).padStart(2, "0")}</span></p>
      <h2 class="panel-title">${clean(spot[lang === "fr" ? 1 : 0])}</h2>
      <p class="panel-author">${clean(work.author)} · ${clean(local(work.title))}</p>
      <section class="panel-section"><h3>${t("observe")}</h3><p>${clean(spot[lang === "fr" ? 3 : 2])}</p></section>
      <section class="panel-section"><h3>${t("intention")}</h3><p>${clean(spot[lang === "fr" ? 5 : 4])}</p></section>
      <section class="panel-section panel-quote"><h3>${t("feeling")}</h3><p>${clean(spot[lang === "fr" ? 7 : 6])}</p></section>`;
    panelCount.textContent = `${clean(local(work.title))} · ${work.year}`;
    setPanelFooter("detail", index, detailIndex);
    openPanel();
    panelIntroAnimation();
    softClick();
  }

  function toggleReveal(canvas) {
    const revealed = canvas.classList.toggle("is-revealed");
    canvas.querySelector('[data-action="reveal"]').textContent = revealed
      ? t("conceal")
      : t("reveal");
    softClick();
  }

  function goTo(nextIndex, force = false) {
    const scenes = getScenes();
    if (
      changing ||
      nextIndex === current ||
      nextIndex < 0 ||
      nextIndex >= scenes.length
    )
      return;
    changing = true;
    closePanel({ quiet: true });
    const previous = scenes[current];
    const next = scenes[nextIndex];
    const direction = nextIndex > current ? "left" : "right";
    const previousCanvas = previous.querySelector(".art-canvas");
    if (previousCanvas) {
      previousCanvas.classList.remove("is-revealed", "is-zoomed", "has-torch");
      previousCanvas.style.removeProperty("--x");
      previousCanvas.style.removeProperty("--y");
      previousCanvas
        .querySelectorAll(".hotspot.is-active")
        .forEach((h) => h.classList.remove("is-active"));
    }
    previous.classList.add(direction === "left" ? "leave-left" : "leave-right");
    previous.classList.remove("is-active", "is-detail");
    next.classList.add("is-active");
    current = nextIndex;
    updateUI();
    playTransitionTone();
    if (!force && nextIndex > 0 && nextIndex < 7) {
      sceneFlash.querySelector("span").textContent = roman(nextIndex);
      sceneFlash.classList.add("is-visible");
      setTimeout(() => sceneFlash.classList.remove("is-visible"), 390);
      setTimeout(() => showSceneCard(nextIndex), 370);
      const prompt = next.querySelector(".art-prompt");
      if (
        prompt &&
        nextIndex === 1 &&
        !sessionStorage.getItem("nocturne-prompt")
      ) {
        setTimeout(() => prompt.classList.add("is-visible"), 1400);
        setTimeout(() => prompt.classList.remove("is-visible"), 5400);
        sessionStorage.setItem("nocturne-prompt", "1");
      }
    }
    if (nextIndex === 7)
      document.querySelector("#outro-quote").textContent =
        works[Math.max(0, Math.min(works.length - 1, lastWorkIndex))].quote[
          lang
        ] || works[0].quote.en;
    if (nextIndex >= 1 && nextIndex <= works.length)
      lastWorkIndex = nextIndex - 1;
    setTimeout(() => {
      previous.classList.remove("leave-left", "leave-right");
      changing = false;
    }, 1120);
  }
  let lastWorkIndex = 0;

  // Generative ambient sound: only starts after a deliberate tap/click, and uses no external audio asset.
  let soundOn = false;
  let audioCtx = null,
    soundBus = null,
    droneTimer = null;
  function createSound() {
    if (audioCtx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    audioCtx = new AudioCtx();
    soundBus = audioCtx.createGain();
    soundBus.gain.value = 0.0001;
    const filter = audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1100;
    soundBus.connect(filter);
    filter.connect(audioCtx.destination);
  }
  function chime(freq = 220, delay = 0, length = 1.8) {
    if (!audioCtx || !soundBus) return;
    const now = audioCtx.currentTime + delay;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.045, now + 0.035);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + length);
    osc.connect(gain);
    gain.connect(soundBus);
    osc.start(now);
    osc.stop(now + length + 0.05);
  }
  function startAmbience() {
    createSound();
    if (!audioCtx) return;
    audioCtx.resume();
    soundBus.gain.cancelScheduledValues(audioCtx.currentTime);
    soundBus.gain.exponentialRampToValueAtTime(
      0.33,
      audioCtx.currentTime + 0.6,
    );
    if (!droneTimer) {
      const notes = [130.81, 164.81, 196, 146.83];
      let note = 0;
      chime(notes[0], 0, 4);
      droneTimer = setInterval(() => {
        if (soundOn) {
          chime(notes[note++ % notes.length], 0, 4.2);
          chime(notes[(note + 1) % notes.length] * 2, 0.22, 2.6);
        }
      }, 4600);
    }
  }
  function stopAmbience() {
    if (!audioCtx || !soundBus) return;
    soundBus.gain.cancelScheduledValues(audioCtx.currentTime);
    soundBus.gain.exponentialRampToValueAtTime(
      0.0001,
      audioCtx.currentTime + 0.45,
    );
  }
  function softClick() {
    if (soundOn) chime(620, 0, 0.24);
  }
  function setSound(on) {
    soundOn = on;
    if (on) startAmbience();
    else stopAmbience();
    const soundButton = document.querySelector("#sound-toggle");
    soundButton.classList.toggle("is-on", on);
    soundButton.setAttribute("aria-pressed", String(on));
    document.querySelector("#sound-label").textContent = on
      ? t("soundOn")
      : t("soundOff");
  }

  // Event delegation makes re-rendering for the language switch safe.
  document.addEventListener("click", (event) => {
    const language = event.target.closest(".language");
    if (language) {
      setLanguage(language.dataset.lang);
      return;
    }
    const progress = event.target.closest("#progress button");
    if (progress) {
      goTo(Number(progress.dataset.go));
      return;
    }
    const home = event.target.closest("#brand-home");
    if (home) {
      goTo(0);
      return;
    }
    const enter = event.target.closest("#enter");
    if (enter) {
      if (!soundOn) setSound(true);
      goTo(1);
      return;
    }
    const restart = event.target.closest("#restart");
    if (restart) {
      goTo(0);
      return;
    }
    const mobilePrev = event.target.closest("#previous");
    if (mobilePrev) {
      goTo(current - 1);
      return;
    }
    const mobileNext = event.target.closest("#next");
    if (mobileNext) {
      goTo(current + 1);
      return;
    }
    const sound = event.target.closest("#sound-toggle");
    if (sound) {
      setSound(!soundOn);
      return;
    }
    const close = event.target.closest("#close-panel");
    if (close || event.target === backdrop) {
      closePanel();
      return;
    }
    const pPrev = event.target.closest("#panel-prev");
    if (pPrev && panelState?.mode === "detail") {
      openDetail(panelState.work, panelState.detail - 1);
      return;
    }
    const pNext = event.target.closest("#panel-next");
    if (pNext && panelState?.mode === "detail") {
      openDetail(panelState.work, panelState.detail + 1);
      return;
    }
    const action = event.target.closest(".canvas-button");
    if (action) {
      const canvas = action.closest(".art-canvas");
      const index = Number(canvas.dataset.work);
      if (action.dataset.action === "context") openContext(index);
      else toggleReveal(canvas);
      return;
    }
    const hotspot = event.target.closest(".hotspot");
    if (hotspot) {
      openDetail(
        Number(hotspot.closest(".art-canvas").dataset.work),
        Number(hotspot.dataset.hotspot),
      );
    }
  });

  function setLanguage(nextLanguage) {
    if (!copy[nextLanguage] || nextLanguage === lang) return;
    const currentScene = current;
    const oldPanel = panelState;
    lang = nextLanguage;
    localStorage.setItem("nocturne-language", lang);
    closePanel({ quiet: true });
    renderWorks();
    buildProgress();
    translateStatic();
    getScenes().forEach((scene) =>
      scene.classList.toggle(
        "is-active",
        Number(scene.dataset.scene) === currentScene,
      ),
    );
    updateUI();
    if (oldPanel?.mode === "detail") openDetail(oldPanel.work, oldPanel.detail);
    else if (oldPanel?.mode === "context") openContext(oldPanel.work);
  }

  // Mouse spotlight in work images and custom cursor inertia.
  document.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    const canvas = event.target.closest?.(".art-canvas");
    document.querySelectorAll(".art-canvas.has-torch").forEach((item) => {
      if (item !== canvas) item.classList.remove("has-torch");
    });
    if (
      canvas &&
      !canvas.classList.contains("is-revealed") &&
      !canvas.classList.contains("is-zoomed")
    ) {
      const box = canvas.getBoundingClientRect();
      canvas.classList.add("has-torch");
      canvas.style.setProperty(
        "--x",
        `${Math.max(-8, Math.min(108, ((event.clientX - box.left) / box.width) * 100))}%`,
      );
      canvas.style.setProperty(
        "--y",
        `${Math.max(-8, Math.min(108, ((event.clientY - box.top) / box.height) * 100))}%`,
      );
    }
  });
  document.addEventListener("pointerover", (event) => {
    if (event.target.closest("button, [data-magnetic], .art-canvas"))
      cursor?.classList.add("is-hover");
    if (event.target.closest(".art-canvas")) cursor?.classList.add("is-light");
  });
  document.addEventListener("pointerout", (event) => {
    if (event.target.closest("button, [data-magnetic], .art-canvas"))
      cursor?.classList.remove("is-hover");
    if (event.target.closest(".art-canvas"))
      cursor?.classList.remove("is-light");
  });
  document.addEventListener("pointerdown", () =>
    cursor?.classList.add("is-pressed"),
  );
  document.addEventListener("pointerup", () =>
    cursor?.classList.remove("is-pressed"),
  );
  function animateCursor() {
    if (isFinePointer) {
      cursorX += (pointerX - cursorX) * 0.31;
      cursorY += (pointerY - cursorY) * 0.31;
      auraX += (pointerX - auraX) * 0.055;
      auraY += (pointerY - auraY) * 0.055;
      cursor.style.transform = `translate3d(${cursorX}px,${cursorY}px,0)`;
      aura.style.transform = `translate3d(${auraX}px,${auraY}px,0)`;
    }
    requestAnimationFrame(animateCursor);
  }

  // Keyboard, wheel and swipe navigation.
  document.addEventListener("keydown", (event) => {
    if (panelState) {
      if (event.key === "Escape") closePanel();
      else if (
        panelState.mode === "detail" &&
        event.key === "ArrowLeft" &&
        panelState.detail > 0
      )
        openDetail(panelState.work, panelState.detail - 1);
      else if (
        panelState.mode === "detail" &&
        event.key === "ArrowRight" &&
        panelState.detail < works[panelState.work].hotspots.length - 1
      )
        openDetail(panelState.work, panelState.detail + 1);
      return;
    }
    if (event.key === "ArrowRight" || event.key === " ") {
      event.preventDefault();
      goTo(current + 1);
    } else if (event.key === "ArrowLeft") goTo(current - 1);
    else if (event.key === "Escape") goTo(0);
    else if (event.key >= "1" && event.key <= "6") goTo(Number(event.key));
    else if (event.key.toLowerCase() === "s") setSound(!soundOn);
    else if (event.key.toLowerCase() === "i" && current > 0 && current < 7)
      openContext(current - 1);
  });
  let wheelLocked = false;
  document.addEventListener(
    "wheel",
    (event) => {
      if (panelState || wheelLocked || Math.abs(event.deltaY) < 24) return;
      wheelLocked = true;
      goTo(current + (event.deltaY > 0 ? 1 : -1));
      setTimeout(() => {
        wheelLocked = false;
      }, 1050);
    },
    { passive: true },
  );
  let touchStart = null;
  document.addEventListener(
    "touchstart",
    (event) => {
      touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    },
    { passive: true },
  );
  document.addEventListener(
    "touchend",
    (event) => {
      if (!touchStart || panelState) return;
      const dx = event.changedTouches[0].clientX - touchStart.x;
      const dy = event.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy))
        goTo(current + (dx < 0 ? 1 : -1));
      touchStart = null;
    },
    { passive: true },
  );

  // Light magnetic hover for the two primary pills.
  document.addEventListener("pointermove", (event) => {
    if (!isFinePointer) return;
    document.querySelectorAll("[data-magnetic]").forEach((button) => {
      const r = button.getBoundingClientRect();
      const x = event.clientX - r.left - r.width / 2;
      const y = event.clientY - r.top - r.height / 2;
      if (Math.abs(x) < r.width && Math.abs(y) < r.height)
        button.style.transform = `translate(${x * 0.07}px,${y * 0.09}px)`;
      else button.style.transform = "";
    });
  });

  function imageReady() {
    return Promise.all(
      [...document.images].map((image) =>
        image.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              image.addEventListener("load", resolve, { once: true });
              image.addEventListener("error", resolve, { once: true });
            }),
      ),
    );
  }
  function init() {
    renderWorks();
    buildProgress();
    translateStatic();
    updateUI();
    animateCursor();
    imageReady().then(() =>
      setTimeout(
        () => document.querySelector("#loader").classList.add("is-done"),
        1050,
      ),
    );
    setTimeout(
      () => document.querySelector("#loader").classList.add("is-done"),
      3800,
    );
  }
  init();
})();
