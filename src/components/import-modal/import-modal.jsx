import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';

import Box from '../box/box.jsx';
import CloseButton from '../close-button/close-button.jsx';
import {H2, P} from '../typography/typography.jsx';

import styles from './import-modal.css';

const messages = defineMessages({
    title: {
        id: 'gui.importInfo.title',
        defaultMessage: 'View a Scratch 2.0 Project',
        description: 'Scratch 2.0 import modal label - for accessibility'
    },
    formDescription: {
        defaultMessage:
            'Enter a link to one of your shared Scratch projects. Changes made in this 3.0 Beta will not be saved.',
        description: 'Import project message',
        id: 'gui.importInfo.betamessage'
    },
    previewFormDescription: {
        defaultMessage:
            'Enter a link to one of your shared Scratch projects. Changes made in this 3.0 Preview will not be saved.',
        description: 'Import project message',
        id: 'gui.importInfo.message'
    },
    invalidFormatError: {
        id: 'gui.importInfo.invalidFormatError',
        defaultMessage: 'Uh oh, that project link or id doesn\'t look quite right.',
        description: 'Invalid project link or id message'
    }
});

const ImportModal = ({intl, ...props}) => (
    <ReactModal
        isOpen
        className={styles.modalContent}
        contentLabel={intl.formatMessage({...messages.title})}
        overlayClassName={styles.modalOverlay}
        onRequestClose={props.onCancel}
    >
        <div dir={props.isRtl ? 'rtl' : 'ltr'} >
            <Box>
                <div className={styles.header}>
                    <div
                        className={classNames(
                            styles.headerItem,
                            styles.headerItemClose
                        )}
                    >
                        <CloseButton
                            buttonType="back"
                            size={CloseButton.SIZE_LARGE}
                            onClick={props.onGoBack}
                        />
                    </div>
                    <div
                        className={classNames(
                            styles.headerItem,
                            styles.headerItemTitle
                        )}
                    >
                        <H2>
                            {intl.formatMessage({...messages.title})}
                        </H2>
                    </div>
                    <div className={classNames(styles.headerItem, styles.headerItemFilter)}>
                        {null}
                    </div>
                </div>
            </Box>

            <Box className={styles.body}>
                <P>
                    {intl.formatMessage({...messages.formDescription})}
                </P>
                <Box
                    className={classNames(styles.inputRow,
                        (props.hasValidationError ? styles.badInputContainer : styles.okInputContainer))
                    }
                >
                    <input
                        autoFocus
                        placeholder={props.placeholder}
                        value={props.inputValue}
                        onChange={props.onChange}
                        onKeyPress={props.onKeyPress}
                    />
                    <button
                        className={styles.okButton}
                        title={intl.formatMessage({
                            defaultMessage: 'View Project',
                            description: 'Tooltip for View button',
                            id: 'gui.importModal.viewprojecttooltip'
                        })}
                        onClick={props.onViewProject}
                    >
                        <FormattedMessage
                            defaultMessage="View"
                            description="Label for button to load a scratch 2.0 project"
                            id="gui.importModal.viewproject"
                        />
                    </button>
                </Box>
                {props.hasValidationError ?
                    <Box className={styles.errorRow}>
                        <P>
                            <FormattedMessage
                                {...messages[`${props.errorMessage}`]}
                            />
                        </P>
                    </Box> : null
                }
                <Box className={styles.buttonRow}>
                    <button
                        onClick={props.onGoBack}
                    >
                        <FormattedMessage
                            defaultMessage="Go Back"
                            description="Label for button to back out of importing a project"
                            id="gui.importInfo.goback"
                        />
                    </button>
                </Box>
                <Box className={styles.faqLinkText}>
                    <FormattedMessage
                        defaultMessage="To learn more, go to the {previewFaqLink}."
                        description="Invitation to try 3.0 preview"
                        id="gui.importInfo.previewfaq"
                        values={{
                            previewFaqLink: (
                                <a
                                    className={styles.faqLink}
                                    href="//scratch.mit.edu/3faq"
                                >
                                    <FormattedMessage
                                        defaultMessage="FAQ"
                                        description="link to Scratch 3.0 FAQ page"
                                        id="gui.importInfo.previewfaqlinktext"
                                    />
                                </a>
                            )
                        }}
                    />
                </Box>
            </Box>
        </div>
    </ReactModal>
);

ImportModal.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    hasValidationError: PropTypes.bool.isRequired,
    inputValue: PropTypes.string.isRequired,
    intl: intlShape.isRequired,
    isRtl: PropTypes.bool,
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onGoBack: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    onViewProject: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

export default injectIntl(ImportModal);
