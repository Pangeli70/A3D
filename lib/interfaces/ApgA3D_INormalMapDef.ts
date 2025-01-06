/** ---------------------------------------------------------------------------
 * @module [BrdGlb]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20240309
 * ----------------------------------------------------------------------------
 */

import {
  ApgA3D_ITextureDef
} from "./ApgA3D_ITextureDef.ts";

/**
 * Definizione dei dati di mappatura delle NORMAL MAPS.
 */
export interface ApgA3D_INormalMapDef extends ApgA3D_ITextureDef {


  isNormalMap: true;

  /**
   * Scala di profondità della normal map
   */
  normalDepth: number

}

