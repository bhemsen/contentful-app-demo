import React from 'react';
import { Card, Heading, Paragraph } from '@contentful/f36-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { CombinedLinkActions, MultipleEntryReferenceEditor } from '@contentful/field-editor-reference';

const Field = () => {
  const isInitiallyDisabled = !!window.localStorage.getItem('initialDisabled')
  const instanceParams = JSON.parse(window.localStorage.getItem('instanceParams') || '')
  const [sdk, mitt] = newReferenceEditorFakeSdk()
  return (
    <div>
      <MultipleEntryReferenceEditor
        hasCardEditActions={true}
        renderCustomActions={props => <CombinedLinkActions {...props} />}
        viewType="link"
        sdk={sdk}
        isInitiallyDisabled={isInitiallyDisabled}
        parameters={{
          instance: instanceParams || {
            showCreateEntityAction: true,
            showLinkEntityAction: true,
          },
        }}
      />
      <ActionsPlayground mitt={mitt} />
    </div>
  )
}

export default Field;