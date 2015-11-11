/**
 * Created by god0725 on 2015/10/29.
 */
Meteor.publish('posts', function(){
    return Posts.find();
});