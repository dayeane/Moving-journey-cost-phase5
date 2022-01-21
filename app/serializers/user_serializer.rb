class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :trips
  has_many :trips
end
