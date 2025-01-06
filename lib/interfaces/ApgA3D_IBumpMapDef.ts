/** ---------------------------------------------------------------------------
 * @module [BrdGlb]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Spostato nel suo file dedicato + Commenti e refactoring
 * @version 0.3 APG 20231227 Modulo BrdGlb server side
 * @version 0.4 APG 20240225 Modulo BrdBlm server side
 * ----------------------------------------------------------------------------
 */
import {
    ApgA3D_ITextureDef
} from "./ApgA3D_ITextureDef.ts";

/**
 * Definizione dei dati di mappatura delle BUMPMAP.
 */
export interface ApgA3D_IBumpMapDef extends ApgA3D_ITextureDef {

    isBumpMap: true;

    /**
     * Profondità dell'effetto di rugosità
     */
    depth: number;

}

