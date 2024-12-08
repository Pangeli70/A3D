/** ---------------------------------------------------------------------------
 * @module [ApgA3D]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20230707
 * @version 0.2 APG 20231115 Moved to its own file
 * @version 0.3 APG 20231227 Moved server side
 * @version 0.4 APG 20241209 Moved to ApgA3D library
 * ----------------------------------------------------------------------------
 */

import { Uts } from "../deps.ts";



/**
 * RAL Color definition
 */
export interface ApgA3D_IRalColorDef {

  /** RAL code */
  code: string;

  /** RGB HEx Color */
  color: number;

  /** Multilingual name */
  name: Uts.ApgUts_IMultilanguage;
}

