/** ---------------------------------------------------------------------------
 * @module [BrdGlb]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20240323
 * ----------------------------------------------------------------------------
 */

import { ApgA3D_ITextureDef } from "./ApgA3D_ITextureDef.ts";

/**
 * Definizione dei dati di mappatura delle texture di colorazione "albedo".
 */
export interface ApgA3D_IAlbedoMapDef extends ApgA3D_ITextureDef {


    isAlbedoMap: true;

}
