/** ---------------------------------------------------------------------------
 * @module [BrdGlb]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20240323
 * ----------------------------------------------------------------------------
 */

import { ApgA3D_ITextureDef } from "./ApgA3D_ITextureDef.ts";

/**
 * Definizione dei dati di mappatura delle mappe di trasparenza.
 */
export interface ApgA3D_IAlphaMapDef extends ApgA3D_ITextureDef {


  isAlphaMap: true;

}


