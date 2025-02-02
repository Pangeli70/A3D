/** ---------------------------------------------------------------------------
 * @module [ApgA3D]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20240323
 * @version 0.2 APG 20241209 Moved to A3D module
 * ----------------------------------------------------------------------------
 */

import { ApgA3D_ITextureDef } from "./ApgA3D_ITextureDef.ts";

/**
 * Definition of an ALPHA transparency map texture
 */
export interface ApgA3D_IAlphaMapDef extends ApgA3D_ITextureDef {


  isAlphaMap: true;

}


