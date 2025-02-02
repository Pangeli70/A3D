/** ---------------------------------------------------------------------------
 * @module [ApgGlb]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Moved in its own file
 * @version 0.3 APG 20241209 Moved to A3D module
 * ----------------------------------------------------------------------------
 */
import {    ApgA3D_ITextureDef} from "./ApgA3D_ITextureDef.ts";


/**
 * Definition of a BUMPMAP map texture.
 */
export interface ApgA3D_IBumpMapDef extends ApgA3D_ITextureDef {

    isBumpMap: true;

    /**
     * Roughtness depth
     */
    depth: number;

}

