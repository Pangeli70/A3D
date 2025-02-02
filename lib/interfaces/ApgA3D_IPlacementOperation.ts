/** ---------------------------------------------------------------------------
 * @module [ApgA3D]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20231227
 * @version 0.2 APG 20241209 Moved to A3D module
 * ----------------------------------------------------------------------------
 */

import {  ApgA3D_ePlacementOperation} from "../enums/ApgA3D_ePlacementOperation.ts";

/**
 * Operation of placement or orientation of components and meshes in the 
 * tree dimensional space 
 */
export interface ApgA3D_IPlacementOperation {


  operation: ApgA3D_ePlacementOperation;

  /**
   * Millimeters for translation and radians for rotation
   */
  value: number;

  /**
   * Flag that defines a couple operation that can be applied to the second object 
   * of the couple by simply inverting the sign of the numeric value in the [value] field.
   */
  isFlippable: boolean;
  
}
