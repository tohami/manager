//@flow
import React , {Component} from 'react' ;
import {Card , CardSection, Input , Button} from './common' ;
import {connect} from 'react-redux';
import {emailChangedAC} from '../actions'

class LoginForm extends Component {

onEmailChange (text) {
  this.props.emailchangedAC(text) ;
}

  render () {
    return (
      <Card >
        <CardSection>
          <Input
            label="Email"
            placeholder = "Email@gmail.com"
            onChangeText = {this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder = "Password"
            />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}
//part 2 - 5 hook up action creator using connect helper
//first argument is mapstatetoprops functions
//second argument is the action creator not the method
//after hookup action creator we now have access to prop called emailChangedAC
//this.props.emailchangedAC(text)
export default connect(null , emailChangedAC)(LoginForm) ;
