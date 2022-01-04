/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {expect} from 'chai';
import * as fs from 'fs';
import * as path from 'path';
import 'mocha';
import {CamelYaml} from "../../src/core/api/CamelYaml";

describe('CRD YAML to Integration', () => {

    const yaml = fs.readFileSync('test/camel_yaml/integration1.yaml',{encoding:'utf8', flag:'r'});

    it('YAML <-> Object', () => {
        const i = CamelYaml.yamlToIntegration("test1.yaml", yaml);
        expect(i.metadata.name).to.equal('test1.yaml');
        expect(i.kind).to.equal('Integration');
        expect(i.spec.flows.length).to.equal(1);
        expect(i.crd).to.equal(true);
        const y = CamelYaml.integrationToYaml(i);
        expect(y).to.equal(yaml);
    });

});