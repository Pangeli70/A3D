/** ---------------------------------------------------------------------------
 * @module [ApgA3D]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Moved to its own file
 * @version 0.3 APG 20231227 Module Blm server side
 * @version 0.4 APG 20241209 Moved to A3D module
 * ----------------------------------------------------------------------------
 */


import {  ApgA3D_IPoint2D} from "./ApgA3D_IPoint2D.ts";



/**
 * Groups of outlines for coupled meshes for multiple extrusions
 */
export interface ApgA3D_IIntExtOutlinesGroups {
  int: ApgA3D_IPoint2D[][];
  ext: ApgA3D_IPoint2D[][];
}

