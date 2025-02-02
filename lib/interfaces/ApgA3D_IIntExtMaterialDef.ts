/** ---------------------------------------------------------------------------
 * @module [ApgA3D]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Moved to its own file
 * @version 0.3 APG 20231227 Module Glb server side
 * @version 0.4 APG 20240225 Module Blm server side
 * @version 0.5 APG 20241209 Moved to A3D module
 * ----------------------------------------------------------------------------
 */


import {  ApgA3D_IMaterialDef} from "./ApgA3D_IMaterialDef.ts";



/**
 * Definition of materials for coupled meshes that define objects that have
 * different internal/external appearance
 */
export interface ApgA3D_IIntExtMaterialDef {
  int: ApgA3D_IMaterialDef;
  ext: ApgA3D_IMaterialDef;
}

