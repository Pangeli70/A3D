/** ---------------------------------------------------------------------------
 * @module [ApgA3D]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Moved in its own file
 * @version 0.3 APG 20231227 Module Glb server side
 * @version 0.4 APG 20240225 Module Blm server side
 * @version 0.5 APG 20240309 Id + Normal maps + other
 * @version 0.6 APG 20241209 Moved to A3D module
 * ----------------------------------------------------------------------------
 */


import { ApgA3D_IAlbedoMapDef } from "./ApgA3D_IAlbedoMapDef.ts";
import { ApgA3D_IAlphaMapDef } from "./ApgA3D_IAlphaMapDef.ts";
import { ApgA3D_IBumpMapDef } from "./ApgA3D_IBumpMapDef.ts";
import { ApgA3D_INormalMapDef } from "./ApgA3D_INormalMapDef.ts";




/**
 * Mesh material definition
 */
export interface ApgA3D_IMaterialDef {


  /**
   * Unique identifier
   */
  id: string;

  /**
   * Translated name of the material
   */
  name?: string;

  /**
   * Base color
   */
  color: number;

  /**
   * range of acceptable and randomizable colors
   */
  colors?: number[];  //@V0.5

  /**
   * Reflectivity of the material
   */
  roughness: number;

  /**
   * Transparency of the material
   */
  opacity?: number;


  albedoMapDef?: ApgA3D_IAlbedoMapDef;


  bumpMapDef?: ApgA3D_IBumpMapDef;


  normalMapDef?: ApgA3D_INormalMapDef; //@V0.5


  alphaMapDef?: ApgA3D_IAlphaMapDef; //@V0.5

  /**
   * All the maps have applied this additional global rotation in degrees.
   * Values greater than zero generate an anti-clockwise rotation
   */
  textureRotationInDeg?: number; //@V0.5

  /**
   * All the maps have applied this additional random rotation in degrees. 
   * This setting is considered only if [textureRotationInDeg] is not defined
   */
  hasRandomTextureRotation?: boolean; //@V0.5

  /**
   * The material definition has changed and so the real associated material 
   * has to be updated
   */
  isDirty?: boolean; //@V0.5

}

