/** ---------------------------------------------------------------------------
 * @module [BrdGlb]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdGlb server side
 * @version 0.4 APG 20240225 Modulo BrdBlm server side
 * @version 0.5 APG 20240309 Id + Normal maps + Signature_V2
 * ----------------------------------------------------------------------------
 */



import {
  ApgA3D_IAlbedoMapDef
} from "./ApgA3D_IAlbedoMapDef.ts";
import {
  ApgA3D_IAlphaMapDef
} from "./ApgA3D_IAlphaMapDef.ts";
import {
  ApgA3D_IBumpMapDef
} from "./ApgA3D_IBumpMapDef.ts";
import {
  ApgA3D_INormalMapDef
} from "./ApgA3D_INormalMapDef.ts";




/**
 * Definizione del materiale per le mesh
 */
export interface ApgA3D_IMaterialDef {


  /**
   * Identificatore della definizione del materiale
   */
  id: string;

  /**
   * Nome in lingua del materiale
   */
  name?: string;

  /**
   * Colore base del materiale
   */
  color: number;

  /**
   * Colori accettabili e randomizzabili
   */
  colors?: number[];  //@V2

  /**
   * Riflettività del materiale
   */
  roughness: number;

  /**
   * Trasparenza base del materiale
   */
  opacity?: number;

  /**
   * Il materiale ha una immagine ripetibile
   */
  albedoMapDef?: ApgA3D_IAlbedoMapDef;

  /**
   * Il materiale ha una mappa di rugosità
   */
  bumpMapDef?: ApgA3D_IBumpMapDef;

  /**
   * Il materiale ha una mappa delle normali in alternativa alla mappa di rugosità
   */
  normalMapDef?: ApgA3D_INormalMapDef; //@V2

  /**
   * Il materiale ha una mappa delle trasparenze
   */
  alphaMapDef?: ApgA3D_IAlphaMapDef; //@V2

  /**
   * Le texture del materiale hanno una rotazione globale in gradi sessaggesimali. Valori positivi generano una rotazione antioraria 
   */
  textureRotationInDeg?: number; //@V2

  /**
   * Le texture del materiale hanno una rotazione random. Questa impostazione
   * viene considerata solo se la rotazione precedente non è definita
   */
  hasRandomTextureRotation?: boolean; //@V2

  /**
   * La definizione del materiale è stata cambiata e quindi il materiale reale
   * associato deve essere aggiornato
   */
  isUpdated?: boolean; //@V2

}

