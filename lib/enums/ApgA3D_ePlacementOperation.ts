/** ---------------------------------------------------------------------------
 * @module [ApgA3D]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20231227
 * @version 0.2 APG 20241209 Moved to A3D module
 * ----------------------------------------------------------------------------
 */


/**
 * Types of operations for the placement and orientation of the components 
 * and meshes in the three-dimensional space.
 */
export enum ApgA3D_ePlacementOperation {

  TRANSLATE_X_IN_MM = "TX",
  TRANSLATE_Y_IN_MM = "TY",
  TRANSLATE_Z_IN_MM = "TZ",
  ROTATE_X_IN_RAD = "RX",
  ROTATE_Y_IN_RAD = "RY",
  ROTATE_Z_IN_RAD = "RZ"

}
