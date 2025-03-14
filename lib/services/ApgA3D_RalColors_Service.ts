/** ---------------------------------------------------------------------------
 * @module [ApgA3D]
 * @author [APG] ANGELI Paolo Giusto 
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231227 Module Blm server side
 * @version 0.3 APG 20241209 Moved to A3D module
 * ----------------------------------------------------------------------------
 */

import { ApgA3D_IRalColorDef } from "../interfaces/ApgA3D_IRalColorDef.ts";


const RAW_CSV = `
RAL,RGB,HEX,CMYK,LRV,English,German,French,Spanish,Italian,Dutch
RAL 1000,205-186-136,#CDBA88,0-9-34-20,51.79,Green beige,Grünbeige,Beige vert,Beige verdoso,Beige verdastro,Groenbeige
RAL 1001,208-176-132,#D0B084,0-15-37-18,48.09,Beige,Beige,Beige,Beige,Beige,Beige
RAL 1002,210-170-109,#D2AA6D,0-19-48-18,45.07,Sand yellow,Sandgelb,Jaune sable,Amarillo arena,Giallo sabbia,Zandgeel
RAL 1003,249-169-0,#F9A900,0-32-100-2,49.05,Signal yellow,Signalgelb,Jaune de sécurité,Amarillo señales,Giallo segnale,Signaalgeel
RAL 1004,228-158-0,#E49E00,0-31-100-11,42.13,Golden yellow,Goldgelb,Jaune or,Amarillo oro,Giallo oro,Goudgeel
RAL 1005,203-143-0,#CB8F00,0-30-100-20,34.15,Honey yellow,Honiggelb,Jaune miel,Amarillo miel,Giallo miele,Honinggeel
RAL 1006,225-144-0,#E19000,0-36-100-12,37.45,Maize yellow,Maisgelb,Jaune maïs,Amarillo maíz,Giallo polenta,Maisgeel
RAL 1007,232-140-0,#E88C00,0-40-100-9,37.63,Daffodil yellow,Narzissengelb,Jaune narcisse,Amarillo narciso,Giallo narciso,Narcissengeel
RAL 1011,175-128-80,#AF8050,0-27-54-31,27.65,Brown beige,Braunbeige,Beige brun,Beige pardo,Beige marrone,Bruinbeige
RAL 1012,221-175-40,#DDAF28,0-21-82-13,47.83,Lemon yellow,Zitronengelb,Jaune citron,Amarillo limón,Giallo limone,Citroengeel
RAL 1013,227-217-199,#E3D9C7,0-4-12-11,70.76,Oyster white,Perlweiß,Blanc perlé,Blanco perla,Bianco perla,Parelwit
RAL 1014,221-196-155,#DDC49B,0-11-30-13,58.34,Ivory,Elfenbein,Ivoire,Marfil,Avorio,Ivoorkleurig
RAL 1015,230-210-181,#E6D2B5,0-9-21-10,67.55,Light ivory,Hellelfenbein,Ivoire clair,Marfil claro,Avorio chiaro,Licht ivoorkleurig
RAL 1016,241-221-57,#F1DD39,0-8-76-5,71.30,Sulfur yellow,Schwefelgelb,Jaune soufre,Amarillo azufre,Giallo zolfo,Zwavelgeel
RAL 1017,246-169-81,#F6A951,0-31-67-4,49.80,Saffron yellow,Safrangelb,Jaune safran,Amarillo azafrán,Giallo zafferano,Saffraangeel
RAL 1018,250-202-49,#FACA31,0-19-80-2,63.81,Zinc yellow,Zinkgelb,Jaune zinc,Amarillo de zinc,Giallo zinco,Zinkgeel
RAL 1019,164-143-122,#A48F7A,0-13-26-36,30.53,Grey beige,Graubeige,Beige gris,Beige agrisado,Beige grigiastro,Grijsbeige
RAL 1020,160-143-101,#A08F65,0-11-37-37,29.44,Olive yellow,Olivgelb,Jaune olive,Amarillo oliva,Giallo olivastro,Olijfgeel
RAL 1021,246-182-0,#F6B600,0-26-100-4,53.97,Colza yellow,Rapsgelb,Jaune colza,Amarillo colza,Giallo navone,Koolzaadgeel
RAL 1023,247-181-0,#F7B500,0-27-100-3,54.24,Traffic yellow,Verkehrsgelb,Jaune signalisation,Amarillo tráfico,Giallo traffico,Verkeersgeel
RAL 1024,186-143-76,#BA8F4C,0-23-59-27,32.74,Ochre yellow,Ockergelb,Jaune ocre,Amarillo ocre,Giallo ocra,Okergeel
RAL 1026,255-255-0,#FFFF00,0-0-100-0,88.65,Luminous yellow,Leuchtgelb,Jaune brillant,Amarillo brillante,Giallo brillante,Briljantgeel
RAL 1027,167-127-15,#A77F0F,0-24-91-35,25.72,Curry,Currygelb,Jaune curry,Amarillo curry,Giallo curry,Kerriegeel
RAL 1028,255-156-0,#FF9C00,0-39-100-0,47.55,Melon yellow,Melonengelb,Jaune melon,Amarillo melón,Giallo melone,Meloengeel
RAL 1032,226-163-0,#E2A300,0-28-100-11,43.37,Broom yellow,Ginstergelb,Jaune genêt,Amarillo retama,Giallo scopa,Bremgeel
RAL 1033,249-154-29,#F99A1D,0-38-88-2,44.66,Dahlia yellow,Dahliengelb,Jaune dahlia,Amarillo dalia,Giallo dalia,Dahliageel
RAL 1034,235-156-82,#EB9C52,0-34-65-8,43.82,Pastel yellow,Pastellgelb,Jaune pastel,Amarillo pastel,Giallo pastello,Pastelgeel
RAL 1035,143-131-112,#8F8370,0-8-22-44,34.58,Pearl beige,Perlbeige,Beige nacré,Beige perlado,Beige perlato,Parelmoergrijs
RAL 1036,128-100-64,#806440,0-22-50-50,28.30,Pearl gold,Perlgold,Or nacré,Oro perlado,Oro perlato,Parelmoergoud
RAL 1037,240-146-0,#F09200,0-39-100-6,40.61,Sun yellow,Sonnengelb,Jaune soleil,Amarillo sol,Giallo sole,Zonnegeel
RAL 2000,218-110-0,#DA6E00,0-50-100-15,28.22,Yellow orange,Gelborange,Orangé jaune,Amarillo naranja,Arancio giallastro,Geeloranje
RAL 2001,186-72-28,#BA481C,0-61-85-27,17.78,Red orange,Rotorange,Orangé rouge,Rojo anaranjado,Arancio rossastro,Roodoranje
RAL 2002,191-57-34,#BF3922,0-70-82-25,16.33,Vermilion,Blutorange,Orangé sang,Naranja sanguíneo,Arancio sanguigno,Vermiljoen
RAL 2003,246-120-41,#F67829,0-51-83-4,34.84,Pastel orange,Pastellorange,Orangé pastel,Naranja pálido,Arancio pastello,Pasteloranje
RAL 2004,226-83-4,#E25304,0-63-98-11,24.61,Pure orange,Reinorange,Orangé pur,Naranja puro,Arancio puro,Zuiver oranje
RAL 2005,255-77-8,#FF4D08,0-70-97-0,33.91,Luminous orange,Leuchtorange,Orangé brillant,Naranja brillante,Arancio brillante,Briljantoranje
RAL 2007,255-178-0,#FFB200,0-30-100-0,61.33,Luminous bright orange,Leuchthellorange,Orangé clair brillant,Naranja claro brillante,Arancio chiaro brillante,Briljant lichtoranje
RAL 2008,236-107-34,#EC6B22,0-55-86-7,29.95,Bright red orange,Hellrotorange,Orangé rouge clair,Rojo claro anaranjado,Rosso arancio chiaro,Licht roodoranje
RAL 2009,222-83-8,#DE5308,0-63-96-13,23.78,Traffic orange,Verkehrsorange,Orangé signalisation,Naranja tráfico,Arancio traffico,Verkeersoranje
RAL 2010,208-93-41,#D05D29,0-55-80-18,23.01,Signal orange,Signalorange,Orangé de sécurité,Naranja señales,Arancio segnale,Signaaloranje
RAL 2011,226-110-15,#E26E0F,0-51-93-11,29.44,Deep orange,Tieforange,Orangé foncé,Naranja intenso,Arancio profondo,Dieporanje
RAL 2012,213-101-78,#D5654E,0-53-63-16,25.27,Salmon orange,Lachsorange,Orangé saumon,Naranja salmón,Arancio salmone,Zalmoranje
RAL 2013,146-62-37,#923E25,0-58-75-43,14.25,Pearl orange,Perlorange,Orangé nacré,Naranja perlado,Arancio perlato,Parelmoeroranje
RAL 2017,252-85-0,#FC5500,0-66-100-1,,RAL orange,RAL orange,Orangé RAL,Naranja RAL,Arancio RAL,RAL oranje
RAL 3000,167-41-32,#A72920,0-75-81-35,12.63,Flame red,Feuerrot,Rouge feu,Rojo vivo,Rosso fuoco,Vuurrood
RAL 3001,155-36-35,#9B2423,0-77-77-39,11.09,Signal red,Signalrot,Rouge de sécurité,Rojo señales,Rosso segnale,Signaalrood
RAL 3002,155-35-33,#9B2321,0-77-79-39,10.80,Carmine red,Karminrot,Rouge carmin,Rojo carmin,Rosso carminio,Karmijnrood
RAL 3003,134-26-34,#861A22,0-81-75-47,8.75,Ruby red,Rubinrot,Rouge rubis,Rojo rubí,Rosso rubino,Robijnrood
RAL 3004,107-28-35,#6B1C23,0-74-67-58,7.39,Purple red,Purpurrot,Rouge pourpre,Rojo púrpura,Rosso porpora,Purperrood
RAL 3005,89-25-31,#59191F,0-72-65-65,6.50,Wine red,Weinrot,Rouge vin,Rojo vino,Rosso vino,Wijnrood
RAL 3007,62-32-34,#3E2022,0-48-45-76,5.47,Black red,Schwarzrot,Rouge noir,Rojo negruzco,Rosso nerastro,Zwartrood
RAL 3009,109-52-45,#6D342D,0-52-59-57,8.50,Oxide red,Oxidrot,Rouge oxyde,Rojo óxido,Rosso ossido,Oxyderood
RAL 3011,120-36-35,#782423,0-70-71-53,8.22,Brown red,Braunrot,Rouge brun,Rojo pardo,Rosso marrone,Bruinrood
RAL 3012,197-133-109,#C5856D,0-32-45-23,31.93,Beige red,Beigerot,Rouge beige,Rojo beige,Rosso beige,Beigerood
RAL 3013,151-46-37,#972E25,0-70-75-41,11.36,Tomato red,Tomatenrot,Rouge tomate,Rojo tomate,Rosso pomodoro,Tomaatrood
RAL 3014,203-115-117,#CB7375,0-43-42-20,27.79,Antique pink,Altrosa,Vieux rose,Rojo viejo,Rosa antico,Oudroze
RAL 3015,216-160-166,#D8A0A6,0-26-23-15,44.15,Light pink,Hellrosa,Rose clair,Rosa claro,Rosa chiaro,Lichtroze
RAL 3016,166-61-48,#A63D30,0-63-71-35,13.96,Coral red,Korallenrot,Rouge corail,Rojo coral,Rosso corallo,Koraalrood
RAL 3017,202-85-93,#CA555D,0-58-54-21,21.80,Rose,Rosé,Rosé,Rosa,Rosato,Bleekrood
RAL 3018,198-63-74,#C63F4A,0-68-63-22,18.61,Strawberry red,Erdbeerrot,Rouge fraise,Rojo fresa,Rosso fragola,Aardbeirood
RAL 3020,187-31-17,#BB1F11,0-83-91-27,14.16,Traffic red,Verkehrsrot,Rouge signalisation,Rojo tráfico,Rosso traffico,Verkeersrood
RAL 3022,207-105-85,#CF6955,0-49-59-19,25.49,Salmon pink,Lachsrot,Rouge saumon,Rojo salmón,Rosso salmone,Zalmrood
RAL 3024,255-45-33,#FF2D21,0-82-87-0,24.33,Luminous red,Leuchtrot,Rouge brillant,Rojo brillante,Rosso brillante,Briljantrood
RAL 3026,255-42-28,#FF2A1C,0-84-89-0,26.10,Luminous bright red,Leuchthellrot,Rouge clair brillant,Rojo claro brillante,Rosso chiaro brillante,Briljant lichtrood
RAL 3027,171-39-60,#AB273C,0-77-65-33,13.04,Raspberry red,Himbeerrot,Rouge framboise,Rojo frambuesa,Rosso lampone,Framboosrood
RAL 3028,204-44-36,#CC2C24,0-78-82-20,17.29,Pure red,Reinrot,Rouge pu,Rojo puro,Rosso puro,Zuiver rood
RAL 3031,166-52-55,#A63437,0-69-67-35,13.57,Orient red,Orientrot,Rouge oriental,Rojo oriente,Rosso oriente,Oriëntrood
RAL 3032,112-29-36,#701D24,0-74-68-56,8.36,Pearl ruby red,Perlrubinrot,Rouge rubis nacré,Rojo rubí perlado,Rosso rubino perlato,Parelmoerdonkerrood
RAL 3033,165-58-46,#A53A2E,0-65-72-35,16.19,Pearl pink,Perlrosa,Rose nacré,Rosa perlado,Rosa perlato,Parelmoerlichtrood
RAL 4001,129-97-131,#816183,2-26-0-49,17.50,Red lilac,Rotlila,Lilas rouge,Rojo lila,Lilla rossastro,Roodlila
RAL 4002,141-60-75,#8D3C4B,0-57-47-45,12.31,Red violet,Rotviolett,Violet rouge,Rojo violeta,Viola rossastro,Roodpaars
RAL 4003,196-97-140,#C4618C,0-51-29-23,24.50,Heather violet,Erikaviolett,Violet bruyère,Violeta érica,Viola erica,Heidepaars
RAL 4004,101-30-56,#651E38,0-70-45-60,7.18,Claret violet,Bordeauxviolett,Violet bordeaux,Burdeos,Viola bordeaux,Bordeauxpaars
RAL 4005,118-104-154,#76689A,23-32-0-40,18.87,Blue lilac,Blaulila,Lilas bleu,Lila azulado,Lilla bluastro,Blauwlila
RAL 4006,144-51-115,#903373,0-65-20-44,12.69,Traffic purple,Verkehrspurpur,Pourpre signalisation,Púrpurá tráfico,Porpora traffico,Verkeerspurper
RAL 4007,71-36-60,#47243C,0-49-15-72,6.24,Purple violet,Purpurviolett,Violet pourpre,Violeta púrpura,Porpora violetto,Purperviolet
RAL 4008,132-76-130,#844C82,0-42-2-48,14.21,Signal violet,Signalviolett,Violet de sécurité,Violeta señales,Violetto segnale,Signaalviolet
RAL 4009,157-134-146,#9D8692,0-15-7-38,27.96,Pastel violet,Pastellviolett,Violet pastel,Violeta pastel,Violetto pastello,Pastelviolet
RAL 4010,187-64-119,#BB4077,0-66-36-27,18.48,Telemagenta,Telemagenta,Telemagenta,Magenta tele,Tele Magenta,Telemagenta
RAL 4011,110-99-135,#6E6387,19-27-0-47,23.15,Pearl violet,Perlviolett,Violet nacré,Violeta perlado,Violetto perlato,Parelmoerdonkerviolet
RAL 4012,106-107-127,#6A6B7F,17-16-0-50,25.34,Pearl blackberry,Perlbrombeer,Mûre nacré,Morado perlado,Mora perlato,Parelmoerlichtviolet
RAL 5000,48-79-110,#304F6E,56-28-0-57,9.81,Violet blue,Violettblau,Bleu violet,Azul violeta,Blu violaceo,Paarsblauw
RAL 5001,14-76-100,#0E4C64,86-24-0-61,8.57,Green blue,Grünblau,Bleu vert,Azul verdoso,Blu verdastro,Groenblauw
RAL 5002,0-56-122,#00387A,100-54-0-52,7.44,Ultramarine blue,Ultramarinblau,Bleu outremer,Azul ultramar,Blu oltremare,Ultramarijnblauw
RAL 5003,31-56-85,#1F3855,64-34-0-67,6.21,Sapphire blue,Saphirblau,Bleu saphir,Azul zafiro,Blu zaffiro,Saffierblauw
RAL 5004,25-30-40,#191E28,38-25-0-84,4.62,Black blue,Schwarzblau,Bleu noir,Azul negruzco,Blu nerastro,Zwartblauw
RAL 5005,0-83-135,#005387,100-39-0-47,10.27,Signal blue,Signalblau,Bleu de sécurité,Azul señales,Blu segnale,Signaalblauw
RAL 5007,55-107-140,#376B8C,61-24-0-45,15.25,Brillant blue,Brillantblau,Bleu brillant,Azul brillante,Blu brillante,Briljantblauw
RAL 5008,43-58-68,#2B3A44,37-15-0-73,7.00,Grey blue,Graublau,Bleu gris,Azul grisáceo,Blu grigiastro,Grijsblauw
RAL 5009,33-95-120,#215F78,73-21-0-53,11.90,Azure blue,Azurblau,Bleu azur,Azul azur,Blu azzurro,Azuurblauw
RAL 5010,0-79-124,#004F7C,100-36-0-51,9.31,Gentian blue,Enzianblau,Bleu gentiane,Azul genciana,Blu genziana,Gentiaanblauw
RAL 5011,26-43-60,#1A2B3C,57-28-0-76,5.44,Steel blue,Stahlblau,Bleu acier,Azul acero,Blu acciaio,Staalblauw
RAL 5012,0-137-182,#0089B6,100-25-0-29,23.21,Light blue,Lichtblau,Bleu clair,Azul luminoso,Blu luce,Lichtblauw
RAL 5013,25-49-83,#193153,70-41-0-67,6.10,Cobalt blue,Kobaltblau,Bleu cobalt,Azul cobalto,Blu cobalto,Kobaltblauw
RAL 5014,99-125-150,#637D96,34-17-0-41,21.54,Pigeon blue,Taubenblau,Bleu pigeon,Azul colombino,Blu colomba,Duifblauw
RAL 5015,0-124-175,#007CAF,100-29-0-31,19.03,Sky blue,Himmelblau,Bleu ciel,Azul celeste,Blu cielo,Hemelsblauw
RAL 5017,0-91-140,#005B8C,100-35-0-45,11.46,Traffic blue,Verkehrsblau,Bleu signalisation,Azul tráfico,Blu traffico,Verkeersblauw
RAL 5018,4-139-140,#048B8C,97-1-0-45,23.01,Turquoise blue,Türkisblau,Bleu turquoise,Azul turquesa,Blu turchese,Turkooisblauw
RAL 5019,0-94-131,#005E83,100-28-0-49,11.79,Capri blue,Capriblau,Bleu capri,Azul capri,Blu capri,Capriblauw
RAL 5020,0-65-75,#00414B,100-13-0-71,7.18,Ocean blue,Ozeanblau,Bleu océan,Azul océano,Blu oceano,Oceaanblauw
RAL 5021,0-117-119,#007577,100-2-0-53,15.94,Water blue,Wasserblau,Bleu d’eau,Azul agua,Blu acqua,Waterblauw
RAL 5022,34-45-90,#222D5A,62-50-0-65,6.01,Night blue,Nachtblau,Bleu nocturne,Azul noche,Blu notte,Nachtblauw
RAL 5023,65-105-140,#41698C,54-25-0-45,16.13,Distant blue,Fernblau,Bleu distant,Azul lejanía,Blu distante,Verblauw
RAL 5024,96-147-172,#6093AC,44-15-0-33,28.56,Pastel blue,Pastellblau,Bleu pastel,Azul pastel,Blu pastello,Pastelblauw
RAL 5025,32-105-124,#20697C,74-15-0-51,17.91,Pearl gentian blue,Perlenzian,Gentiane nacré,Gencian perlado,Blu genziana perlato,Parelmoerblauw
RAL 5026,15-48-82,#0F3052,82-41-0-68,7.63,Pearl night blue,Perlnachtblau,Bleu nuit nacré,Azul noche perlado,Blu notte perlato,Parelmoernachtblauw
RAL 6000,60-116-96,#3C7460,48-0-17-55,17.11,Patina green,Patinagrün,Vert patine,Verde patina,Verde patina,Patinagroen
RAL 6001,54-103-53,#366735,48-0-49-60,13.54,Emerald green,Smaragdgrün,Vert émeraude,Verde esmeralda,Verde smeraldo,Smaragdgroen
RAL 6002,50-89-40,#325928,44-0-55-65,11.18,Leaf green,Laubgrün,Vert feuillage,Verde hoja,Verde foglia,Loofgroen
RAL 6003,80-83-60,#50533C,4-0-28-67,10.81,Olive green,Olivgrün,Vert olive,Verde oliva,Verde oliva,Olijfgroen
RAL 6004,2-68-66,#024442,97-0-3-73,7.66,Blue green,Blaugrün,Vert bleu,Verde azulado,Verde bluastro,Blauwgroen
RAL 6005,17-66-50,#114232,74-0-24-74,7.09,Moss green,Moosgrün,Vert mousse,Verde musgo,Verde muschio,Mosgroen
RAL 6006,60-57-46,#3C392E,0-5-23-76,7.51,Grey olive,Grauoliv,Olive gris,Oliva grisáceo,Oliva grigiastro,Grijs olijfgroen
RAL 6007,44-50-34,#2C3222,12-0-32-80,6.33,Bottle green,Flaschengrün,Vert bouteille,Verde botella,Verde bottiglia,Flessengroen
RAL 6008,54-52-42,#36342A,0-4-22-79,6.05,Brown green,Braungrün,Vert brun,Verde parduzco,Verde brunastro,Bruingroen
RAL 6009,39-53-42,#27352A,26-0-21-79,6.11,Fir green,Tannengrün,Vert sapin,Verde abeto,Verde abete,Dennengroen
RAL 6010,77-111-57,#4D6F39,31-0-49-56,15.18,Grass green,Grasgrün,Vert herbe,Verde hierba,Verde erba,Grasgroen
RAL 6011,107-124-89,#6B7C59,14-0-28-51,20.85,Reseda green,Resedagrün,Vert réséda,Verde reseda,Verde reseda,Resedagroen
RAL 6012,47-61-58,#2F3D3A,23-0-5-76,7.01,Black green,Schwarzgrün,Vert noir,Verde negruzco,Verde nerastro,Zwartgroen
RAL 6013,124-118-90,#7C765A,0-5-27-51,20.19,Reed green,Schilfgrün,Vert jonc,Verde caña,Verde canna,Rietgroen
RAL 6014,71-65-53,#474135,0-8-25-72,7.84,Yellow olive,Gelboliv,Olive jaune,Amarillo oliva,Oliva giallastro,Geel olijfgroen
RAL 6015,61-61-54,#3D3D36,0-0-11-76,7.00,Black olive,Schwarzoliv,Olive noir,Oliva negruzco,Oliva nerastro,Zwart olijfgroen
RAL 6016,0-105-76,#00694C,100-0-28-59,12.99,Turquoise green,Türkisgrün,Vert turquoise,Verde turquesa,Verde turchese,Turkooisgroen
RAL 6017,88-127-64,#587F40,31-0-50-50,20.05,May green,Maigrün,Vert mai,Verde mayo,Verde maggio,Meigroen
RAL 6018,96-153-59,#60993B,37-0-61-40,27.51,Yellow green,Gelbgrün,Vert jaune,Verde amarillento,Verde giallastro,Geelgroen
RAL 6019,185-206-172,#B9CEAC,10-0-17-19,58.29,Pastel green,Weißgrün,Vert blanc,Verde blanquecino,Verde biancastro,Witgroen
RAL 6020,55-66-47,#37422F,17-0-29-74,8.28,Chrome green,Chromoxidgrün,Vert oxyde chromique,Verde cromo,Verde cromo,Chroomoxydegroen
RAL 6021,138-153-119,#8A9977,10-0-22-40,32.14,Pale green,Blaßgrün,Vert pâle,Verde pálido,Verde pallido,Bleekgroen
RAL 6022,58-51-39,#3A3327,0-12-33-77,6.32,Olive drab,Braunoliv,Olive brun,Oliva parduzco,Oliva brunastro,Bruin olijfgroen
RAL 6024,0-131-81,#008351,100-0-38-49,19.75,Traffic green,Verkehrsgrün,Vert signalisation,Verde tráfico,Verde traffico,Verkeersgroen
RAL 6025,94-110-59,#5E6E3B,15-0-46-57,16.16,Fern green,Farngrün,Vert fougère,Verde helecho,Verde felce,Varengroen
RAL 6026,0-95-78,#005F4E,100-0-18-63,10.75,Opal green,Opalgrün,Vert opale,Verde ópalo,Verde opale,Opaalgroen
RAL 6027,126-186-181,#7EBAB5,32-0-3-27,44.35,Light green,Lichtgrün,Vert clair,Verde luminoso,Verde chiaro,Lichtgroen
RAL 6028,49-84-66,#315442,42-0-21-67,10.44,Pine green,Kieferngrün,Vert pin,Verde pino,Verde pino,Pijnboomgroen
RAL 6029,0-111-61,#006F3D,100-0-45-56,13.93,Mint green,Minzgrün,Vert menthe,Verde menta,Verde menta,Mintgroen
RAL 6032,35-127-82,#237F52,72-0-35-50,18.79,Signal green,Signalgrün,Vert de sécurité,Verde señales,Verde segnale,Signaalgroen
RAL 6033,69-135-127,#45877F,49-0-6-47,22.75,Mint turquoise,Minttürkis,Turquoise menthe,Turquesa menta,Turchese menta,Mintturquoise
RAL 6034,122-173-172,#7AADAC,29-0-1-32,38.69,Pastel turquoise,Pastelltürkis,Turquoise pastel,Turquesa pastel,Turchese pastello,Pastelturquoise
RAL 6035,25-77-37,#194D25,68-0-52-70,10.60,Pearl green,Perlgrün,Vert nacré,Verde perlado,Verde perlato,Parelmoerdonkergroen
RAL 6036,4-87-75,#04574B,95-0-14-66,14.23,Pearl opal green,Perlopalgrün,Vert opal nacré,Verde ópalo perlado,Verde opalo perlato,Parelmoerlichtgroen
RAL 6037,0-139-41,#008B29,100-0-71-45,21.38,Pure green,Reingrün,Vert pur,Verde puro,Verde puro,Zuiver groen
RAL 6038,0-181-27,#00B51B,100-0-85-29,29.78,Luminous green,Leuchtgrün,Vert brillant,Verde brillante,Verde brillante,Briljantgroen
RAL 6039,179-196-62,#B3C43E,9-0-68-23,,Fibrous green,Fasergrün,Vert fibre,Verde fibra,Verde fibra,Fibergroen
RAL 7000,122-136-142,#7A888E,14-4-0-44,25.68,Squirrel grey,Fehgrau,Gris petit-gris,Gris ardilla,Grigio vaio,Pelsgrijs
RAL 7001,140-151-156,#8C979C,10-3-0-39,31.66,Silver grey,Silbergrau,Gris argent,Gris plata,Grigio argento,Zilvergrijs
RAL 7002,129-120-99,#817863,0-7-23-49,22.15,Olive grey,Olivgrau,Gris olive,Gris oliva,Grigio olivastro,Olijfgrijs
RAL 7003,121-118-105,#797669,0-2-13-53,20.19,Moss grey,Moosgrau,Gris mousse,Gris musgo,Grigio muschio,Mosgrijs
RAL 7004,154-155-155,#9A9B9B,1-0-0-39,34.79,Signal grey,Signalgrau,Gris de sécurité,Gris señales,Grigio segnale,Signaalgrijs
RAL 7005,107-110-107,#6B6E6B,3-0-3-57,18.03,Mouse grey,Mausgrau,Gris souris,Gris ratón,Grigio topo,Muisgrijs
RAL 7006,118-106-94,#766A5E,0-10-20-54,16.94,Beige grey,Beigegrau,Gris beige,Gris beige,Grigio beige,Beigegrijs
RAL 7008,116-95-61,#745F3D,0-18-47-55,15.09,Khaki grey,Khakigrau,Gris kaki,Gris caqui,Grigio kaki,Kakigrijs
RAL 7009,93-96-88,#5D6058,3-0-8-62,12.97,Green grey,Grüngrau,Gris vert,Gris verdoso,Grigio verdastro,Groengrijs
RAL 7010,88-92-86,#585C56,4-0-7-64,12.89,Tarpaulin grey,Zeltgrau,Gris tente,Gris lona,Grigio tenda,Zeildoekgrijs
RAL 7011,82-89-93,#52595D,12-4-0-64,12.04,Iron grey,Eisengrau,Gris fer,Gris hierro,Grigio ferro,IJzergrijs
RAL 7012,87-93-94,#575D5E,7-1-0-63,14.11,Basalt grey,Basaltgrau,Gris basalte,Gris basalto,Grigio basalto,Bazaltgrijs
RAL 7013,87-80-68,#575044,0-8-22-66,10.60,Brown grey,Braungrau,Gris brun,Gris parduzco,Grigio brunastro,Bruingrijs
RAL 7015,79-83-88,#4F5358,10-6-0-65,11.50,Slate grey,Schiefergrau,Gris ardoise,Gris pizarra,Grigio ardesia,Leigrijs
RAL 7016,56-62-66,#383E42,15-6-0-74,8.07,Anthracite grey,Anthrazitgrau,Gris anthracite,Gris antracita,Grigio antracite,Antracietgrijs
RAL 7021,47-50-52,#2F3234,10-4-0-80,6.48,Black grey,Schwarzgrau,Gris noir,Gris negruzco,Grigio nerastro,Zwartgrijs
RAL 7022,76-74-68,#4C4A44,0-3-11-70,9.88,Umbra grey,Umbragrau,Gris terre d’ombre,Gris sombra,Grigio ombra,Ombergrijs
RAL 7023,128-128-118,#808076,0-0-8-50,23.20,Concrete grey,Betongrau,Gris béton,Gris hormigón,Grigio calcestruzzo,Betongrijs
RAL 7024,69-73-78,#45494E,12-6-0-69,9.34,Graphite grey,Graphitgrau,Gris graphite,Gris grafita,Grigio grafite,Grafietgrijs
RAL 7026,55-67-69,#374345,20-3-0-73,8.27,Granite grey,Granitgrau,Gris granit,Gris granito,Grigio granito,Granietgrijs
RAL 7030,146-142-133,#928E85,0-3-9-43,29.36,Stone grey,Steingrau,Gris pierre,Gris piedra,Grigio pietra,Steengrijs
RAL 7031,91-104-109,#5B686D,17-5-0-57,16.43,Blue grey,Blaugrau,Gris bleu,Gris azulado,Grigio bluastro,Blauwgrijs
RAL 7032,181-176-161,#B5B0A1,0-3-11-29,44.61,Pebble grey,Kieselgrau,Gris silex,Gris guijarro,Grigio ghiaia,Kiezelgrijs
RAL 7033,127-130-116,#7F8274,2-0-11-49,24.14,Cement grey,Zementgrau,Gris ciment,Gris cemento,Grigio cemento,Cementgrijs
RAL 7034,146-136-111,#92886F,0-7-24-43,27.28,Yellow grey,Gelbgrau,Gris jaune,Gris amarillento,Grigio giallastro,Geelgrijs
RAL 7035,197-199-196,#C5C7C4,1-0-2-22,58.34,Light grey,Lichtgrau,Gris clair,Gris luminoso,Grigio luce,Lichtgrijs
RAL 7036,151-147-146,#979392,0-3-3-41,31.66,Platinum grey,Platingrau,Gris platine,Gris platino,Grigio platino,Platinagrijs
RAL 7037,122-123-122,#7A7B7A,1-0-1-52,22.95,Dusty grey,Staubgrau,Gris poussière,Gris polvo,Grigio polvere,Stofgrijs
RAL 7038,176-176-169,#B0B0A9,0-0-4-31,45.28,Agate grey,Achatgrau,Gris agate,Gris ágata,Grigio agata,Agaatgrijs
RAL 7039,107-102-94,#6B665E,0-5-12-58,16.62,Quartz grey,Quarzgrau,Gris quartz,Gris cuarzo,Grigio quarzo,Kwartsgrijs
RAL 7040,152-158-161,#989EA1,6-2-0-37,35.91,Window grey,Fenstergrau,Gris fenêtre,Gris ventana,Grigio finestra,Venstergrijs
RAL 7042,142-146-145,#8E9291,3-0-1-43,30.93,Traffic grey A,Verkehrsgrau A,Gris signalisation A,Gris tráfico A,Grigio traffico A,Verkeersgrijs A
RAL 7043,79-82-80,#4F5250,4-0-2-68,11.35,Traffic grey B,Verkehrsgrau B,Gris signalisation B,Gris tráfico B,Grigio traffico B,Verkeersgrijs B
RAL 7044,183-179-168,#B7B3A8,0-2-8-28,47.21,Silk grey,Seidengrau,Gris soie,Gris seda,Grigio seta,Zijdegrijs
RAL 7045,141-146-149,#8D9295,5-2-0-42,31.21,Telegrey 1,Telegrau 1,Telegris 1,Gris tele 1,Grigio tele 1,Telegrijs 1
RAL 7046,126-134-138,#7E868A,9-3-0-46,25.48,Telegrey 2,Telegrau 2,Telegris 2,Gris tele 2,Grigio tele 2,Telegrijs 2
RAL 7047,200-200-199,#C8C8C7,0-0-0-22,59.07,Telegrey 4,Telegrau 4,Telegris 4,Gris tele 4,Grigio tele 4,Telegrijs 4
RAL 7048,129-123-115,#817B73,0-5-11-49,33.57,Pearl mouse grey,Perlmausgrau,Gris souris nacré,Gris musgo perlado,Grigio topo perlato,Parelmoermuisgrijs
RAL 8000,137-105-63,#89693F,0-23-54-46,18.33,Green brown,Grünbraun,Brun vert,Pardo verdoso,Marrone verdastro,Groenbruin
RAL 8001,157-98-43,#9D622B,0-38-73-38,18.69,Ochre brown,Ockerbraun,Brun terre de Sienne,Pardo ocre,Marrone ocra,Okerbruin
RAL 8002,121-77-62,#794D3E,0-36-49-53,12.23,Signal brown,Signalbraun,Brun de sécurité,Marrón señales,Marrone segnale,Signaalbruin
RAL 8003,126-75-39,#7E4B27,0-40-69-51,12.78,Clay brown,Lehmbraun,Brun argile,Pardo arcilla,Marrone fango,Leembruin
RAL 8004,141-73-49,#8D4931,0-48-65-45,13.54,Copper brown,Kupferbraun,Brun cuivré,Pardo cobre,Marrone rame,Koperbruin
RAL 8007,112-70-43,#70462B,0-38-62-56,10.60,Fawn brown,Rehbraun,Brun fauve,Pardo corzo,Marrone capriolo,Reebruin
RAL 8008,114-74-37,#724A25,0-35-68-55,11.88,Olive brown,Olivbraun,Brun olive,Pardo oliva,Marrone oliva,Olijfbruin
RAL 8011,90-56-39,#5A3827,0-38-57-65,8.11,Nut brown,Nußbraun,Brun noisette,Pardo nuez,Marrone noce,Notenbruin
RAL 8012,102-51-43,#66332B,0-50-58-60,8.16,Red brown,Rotbraun,Brun rouge,Pardo rojo,Marrone rossiccio,Roodbruin
RAL 8014,74-53-38,#4A3526,0-28-49-71,7.12,Sepia brown,Sepiabraun,Brun sépia,Sepia,Marrone seppia,Sepiabruin
RAL 8015,94-47-38,#5E2F26,0-50-60-63,7.67,Chestnut brown,Kastanienbraun,Marron,Castaño,Marrone castagna,Kastanjebruin
RAL 8016,76-43-32,#4C2B20,0-43-58-70,6.78,Mahogany brown,Mahagonibraun,Brun acajou,Caoba,Marrone mogano,Mahoniebruin
RAL 8017,68-47-41,#442F29,0-31-40-73,6.64,Chocolate brown,Schokoladenbraun,Brun chocolat,Chocolate,Marrone cioccolata,Chocoladebruin
RAL 8019,61-54-53,#3D3635,0-11-13-76,6.88,Grey brown,Graubraun,Brun gris,Pardo grisáceo,Marrone grigiastro,Grijsbruin
RAL 8022,26-23-25,#1A1719,0-12-4-90,4.57,Black brown,Schwarzbraun,Brun noir,Pardo negruzco,Marrone nerastro,Zwartbruin
RAL 8023,164-87-41,#A45729,0-47-75-36,17.78,Orange brown,Orangebraun,Brun orangé,Pardo anaranjado,Marrone arancio,Oranjebruin
RAL 8024,121-80-56,#795038,0-34-54-53,12.99,Beige brown,Beigebraun,Brun beige,Pardo beige,Marrone beige,Beigebruin
RAL 8025,117-88-71,#755847,0-25-39-54,13.68,Pale brown,Blaßbraun,Brun pâle,Pardo pálido,Marrone pallido,Bleekbruin
RAL 8028,81-58-42,#513A2A,0-28-48-68,8.21,Terra brown,Terrabraun,Brun terre,Marrón tierra,Marrone terra,Terrabruin
RAL 8029,127-64-49,#7F4031,0-50-61-50,14.02,Pearl copper,Perlkupfer,Cuivre nacré,Cobre perlado,Rame perlato,Parelmoerkoper
RAL 9001,233-224-210,#E9E0D2,0-4-10-9,75.78,Cream,Cremeweiß,Blanc crème,Blanco crema,Bianco crema,Crèmewit
RAL 9002,214-213-203,#D6D5CB,0-0-5-16,67.19,Grey white,Grauweiß,Blanc gris,Blanco grisáceo,Bianco grigiastro,Grijswit
RAL 9003,236-236-231,#ECECE7,0-0-2-7,84.54,Signal white,Signalweiß,Blanc de sécurité,Blanco señales,Bianco segnale,Signaalwit
RAL 9004,43-43-44,#2B2B2C,2-2-0-83,5.69,Signal black,Signalschwarz,Noir de sécurité,Negro señales,Nero segnale,Signaalzwart
RAL 9005,14-14-16,#0E0E10,13-13-0-94,4.22,Jet black,Tiefschwarz,Noir foncé,Negro intenso,Nero intenso,Gitzwart
RAL 9006,161-161-160,#A1A1A0,0-0-1-37,45.88,White aluminium,Weißaluminium,Aluminium blanc,Aluminio blanco,Alluminio brillante,Blank aluminiumkleurig
RAL 9007,134-133-129,#868581,0-1-4-47,28.94,Grey aluminium,Graualuminium,Aluminium gris,Aluminio gris,Alluminio grigiastro,Grijs aluminiumkleurig
RAL 9010,241-237-225,#F1EDE1,0-2-7-5,84.82,Pure white,Reinweiß,Blanc pur,Blanco puro,Bianco puro,Zuiver wit
RAL 9011,39-41-43,#27292B,9-5-0-83,4.87,Graphite black,Graphitschwarz,Noir graphite,Negro grafito,Nero grafite,Grafietzwart
RAL 9012,248-242-225,#F8F2E1,0-2-9-3,,Cleanroom white,Reinraumweiß,Blanc salle blanche,Blanco sala blanca,Bianco cleanroom,Ultrareine zone wit
RAL 9016,241-241-234,#F1F1EA,0-0-3-5,87.27,Traffic white,Verkehrsweiß,Blanc signalisation,Blanco tráfico,Bianco traffico,Verkeerswit
RAL 9017,41-41-42,#29292A,2-2-0-84,5.09,Traffic black,Verkehrsschwarz,Noir signalisation,Negro tráfico,Nero traffico,Verkeerszwart
RAL 9018,200-203-196,#C8CBC4,1-0-3-20,60.77,Papyrus white,Papyrusweiß,Blanc papyrus,Blanco papiro,Bianco papiro,Papyruswit
RAL 9022,133-133-131,#858583,0-0-2-48,35.40,Pearl light grey,Perlhellgrau,Gris clair nacré,Gris claro perlado,Grigio chiaro perlato,Parelmoerlichtgrijs
RAL 9023,120-123-122,#787B7A,2-0-1-52,33.87,Pearl dark grey,Perldunkelgrau,Gris fonçé nacré,Gris oscuro perlado,Grigio scuro perlato,Parelmoerdonkergrijs
`


/**
 * Service for RAL colors definiions
 */
export class ApgA3D_RalColors_Service {

    private static _isInited = false;
    private static _colors: Map<string, ApgA3D_IRalColorDef> = new Map();


    static getColor(acolorName: string) {

        if (!this._isInited) {
            this.#init();
        }
        return this._colors.get(acolorName);
    }



    static #init() {

        this._colors.clear();

        const rows = RAW_CSV.split("\n");

        for (const row of rows) {

            if (row.trim() === "") continue;
            
            const fragments = row.trim().split(",");

            const color: ApgA3D_IRalColorDef = {
                code: fragments[0],
                color: Number(fragments[2].replace("#", "0x")),
                name: {
                    IT: fragments[9],
                    EN: fragments[5],
                    FR: fragments[7],
                    ES: fragments[8],
                    DE: fragments[6]
                }
            }

            this._colors.set(color.code, color);
        }
    }
}

